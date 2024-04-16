import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Observable } from 'rxjs';
import { IUser } from '@/models/user.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  public userData$: Observable<IUser[]> = this.userService.users$;
  public isClosed = true;
  public openingType = 'create';

  public selectedUser!: IUser;
  constructor(
    private userService: UsersService,
    private cdr: ChangeDetectorRef
  ) {}

  public chosenItem(selectedUser: IUser): void {
    if (!selectedUser) return;

    this.isClosed = false;
    this.selectedUser = selectedUser;
    this.userService.setUserForEdit = selectedUser;
    this.openingType = 'select';
    this.cdr.detectChanges();
  }

  public createNewUser(): void {
    this.userService.setUserForEdit = null;
    this.openingType = 'create';
    this.isClosed = false;
  }

  isClosedModal(isClosed: boolean): void {
    this.isClosed = isClosed;
  }
}
