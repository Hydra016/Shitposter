import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../../../types';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginUser(users: User[], user: { username: string; password: string }) {
    let foundUser = users.find(
      (exUser) =>
        exUser.username === user.username && exUser.password === user.password
    );

    if (foundUser) {
      return foundUser;
    }
    return false;
  }
}
