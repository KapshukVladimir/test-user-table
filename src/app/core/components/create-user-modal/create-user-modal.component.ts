import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserForm } from '@/models/user.interface';
import { AbstractErrorMessage } from '@/abstracts/abstract-error-message';
import { passwordMatchValidator } from '@/helpers/utils/customValidators';
import { UsersService } from '../../services/users/users.service';
import { UserAdapter } from '@/components/create-user-modal/adapters/user.adapter';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserModalComponent
  extends AbstractErrorMessage
  implements OnInit, OnDestroy
{
  @Input() openingType!: string;
  @Output() isClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  public subscription!: Subscription;
  constructor(
    private cdr: ChangeDetectorRef,
    private usersService: UsersService
  ) {
    super();
  }

  public get getTitleByOpeningType(): string {
    return this.openingType === 'create'
      ? 'Create new user'
      : `${this.formGroup.get('firstName')?.value} ${this.formGroup.get('lastName')?.value}`;
  }

  public closeModal(): void {
    this.isClosed.emit(true);
  }

  public ngOnInit(): void {
    this.initializeFormGroup();
    this.initializeCurrentUser();
  }

  public deleteItem(): void {
    this.usersService.deleteUser();
    this.isClosed.emit(true);
  }

  public updateItem(): void {
    this.usersService.updateUser(
      UserAdapter.prepareUserPayload(this.formGroup)
    );
    this.isClosed.emit(true);
    this.formGroup.updateValueAndValidity();
  }

  public createItem(): void {
    this.usersService.addNewUser = UserAdapter.prepareUserPayload(
      this.formGroup
    );
    this.isClosed.emit(true);
    this.usersService.setUserForEdit = null;
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initializeCurrentUser(): void {
    this.subscription = this.usersService.userForEdit$.subscribe((user) => {
      if (user) {
        this.formGroup.patchValue(UserAdapter.prepareFormGroup(user));
        this.cdr.detectChanges();
        return;
      }
      this.formGroup.reset();
    });
  }

  private initializeFormGroup(): void {
    this.formGroup = new FormGroup<IUserForm>(
      {
        id: new FormControl(''),
        userName: new FormControl('', [Validators.required]),
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@(gmail|icloud)\.(com|ua)$/),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/),
        ]),
        repeatPassword: new FormControl('', [Validators.required]),
        userType: new FormControl('', [Validators.required]),
      },
      {
        validators: [passwordMatchValidator],
      }
    );
    this.cdr.detectChanges();
  }
}
