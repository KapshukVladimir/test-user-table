import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(
  formGroup: AbstractControl
): ValidationErrors | null {
  const password = formGroup.get('password')?.value;
  const repeatPassword = formGroup.get('repeatPassword')?.value;

  if (password !== repeatPassword) {
    formGroup.get('repeatPassword')?.setErrors({ passwordIsNotSame: true });

    return { passwordMismatch: true };
  }

  return null;
}
