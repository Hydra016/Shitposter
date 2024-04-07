import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../types';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Output() currentSlide = new EventEmitter<string>();
  @Input() users: User[] = [];
  @Output() loggedInUser = new EventEmitter<User>();

  isChecked: boolean = false;
  user = {
    username: '',
    password: '',
  };
  ErrorToast = {
    status: false,
    msg: 'Incorrect username or password',
  };

  constructor(private loginService: LoginService) {}

  handleChange(e: Event | null = null, key: string) {
    if (e && e.target) {
      if (key === 'username') {
        this.user.username = (e.target as HTMLInputElement).value;
      } else {
        this.user.password = (e.target as HTMLInputElement).value;
      }
    }
  }

  handleSubmit() {
    const user = this.loginService.loginUser(this.users, this.user);
    if (user) {
      this.loggedInUser.emit(user);
      if (this.isChecked) {
        localStorage.setItem('isLoggedIn', JSON.stringify(true));
        localStorage.setItem('user', JSON.stringify(user));
      }
    } else {
      this.ErrorToast.status = true;
      setTimeout(() => {
        this.ErrorToast.status = false;
      }, 2000);
    }
  }

  handleCheckBox() {
    this.isChecked = !this.isChecked;
  }

  handleCurrentSlide(slide: string) {
    this.currentSlide.emit(slide);
  }
}
