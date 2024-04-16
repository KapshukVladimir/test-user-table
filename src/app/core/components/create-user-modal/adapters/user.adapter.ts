import { IUser, IUserAdapterForm } from '@/models/user.interface';
import { FormGroup } from '@angular/forms';
import { generateRandomId } from '@/helpers/utils/functions';

export class UserAdapter {
  public static prepareUserPayload(userForm: FormGroup): IUser {
    const {
      userName,
      firstName,
      lastName,
      email,
      password,
      userType,
      id,
      repeatPassword,
    } = userForm.getRawValue();

    return {
      id: id || generateRandomId(),
      user_name: userName,
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      user_type: userType,
      repeat_password: repeatPassword,
    };
  }

  public static prepareFormGroup({
    user_name,
    user_type,
    first_name,
    last_name,
    email,
    password,
    id,
    repeat_password,
  }: IUser): IUserAdapterForm {
    return {
      id: id || generateRandomId(),
      email: email,
      password: password,
      userName: user_name,
      firstName: first_name,
      lastName: last_name,
      userType: user_type,
      repeatPassword: repeat_password,
    };
  }
}
