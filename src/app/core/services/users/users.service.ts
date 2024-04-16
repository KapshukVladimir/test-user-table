import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MOCK_USERS } from '@/constants/MOCK-USERS';
import { IUser } from '@/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public usersSubj: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>(
    MOCK_USERS
  );

  public userForEditSubj: BehaviorSubject<IUser | null> =
    new BehaviorSubject<IUser | null>(null);

  constructor() {}

  public get users$(): Observable<IUser[]> {
    return this.usersSubj.asObservable();
  }

  public get userForEdit$(): Observable<IUser | null> {
    return this.userForEditSubj.asObservable();
  }

  public set addNewUser(user: IUser) {
    this.usersSubj.next([...this.usersSubj.getValue(), user]);
  }

  public updateUser(updatedUser: IUser): void {
    let users = this.usersSubj.getValue();

    users = users.map((user: IUser) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
    this.usersSubj.next(users);
  }

  public deleteUser(): void {
    const updatedUsers = this.usersSubj
      .getValue()
      .filter((user: IUser) => user.id !== this.userForEditSubj.getValue()?.id);

    this.usersSubj.next(updatedUsers);
  }

  public set setUserForEdit(user: IUser | null) {
    this.userForEditSubj.next(user);
  }
}
