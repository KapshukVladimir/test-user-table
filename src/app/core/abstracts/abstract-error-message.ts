import { FormGroup } from '@angular/forms';
import { IUserForm } from '@/models/user.interface';

export class AbstractErrorMessage {
  public readonly defaultRequiredMessage = 'This field is required.';
  public formGroup!: FormGroup<IUserForm>;

  public get emailErrorMessage(): string {
    const controlErrors = this.formGroup.get('email')?.errors;

    return controlErrors?.['required']
      ? this.defaultRequiredMessage
      : controlErrors?.['pattern']
        ? 'Incorrect email format, please try again. It supports icloud and gmail.'
        : '';
  }

  public get passwordErrorMessage(): string {
    const controlErrors = this.formGroup.get('password')?.errors;

    return controlErrors?.['required']
      ? this.defaultRequiredMessage
      : controlErrors?.['pattern']
        ? 'Min length 8 and at least one number and one letter'
        : '';
  }

  public get samePasswordErrorMessage(): string {
    const controlErrors = this.formGroup.get('repeatPassword')?.errors;

    return controlErrors?.['required']
      ? this.defaultRequiredMessage
      : controlErrors?.['passwordIsNotSame']
        ? 'Password is not the same'
        : '';
  }
}
