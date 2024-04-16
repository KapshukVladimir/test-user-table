import { FormControl } from '@angular/forms';

export interface IUser {
  id: string;
  user_name: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  user_type: string;
  repeat_password?: string;
}

export interface IUserForm {
  id: FormControl<string | null>;
  userName: FormControl<string | null>;
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  repeatPassword: FormControl<string | null>;
  userType: FormControl<string | null>;
}
