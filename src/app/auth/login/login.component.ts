import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() currentSlide = new EventEmitter<string>()
  @Input() users: User[] = [];

  isChecked: boolean = false;
  user = {
    username: '',
    password: ''
  }

  handleChange(e: Event | null = null, key: string) {
    if (e && e.target) {
      if(key === 'username') {
        this.user.username = (e.target as HTMLInputElement).value;
      } else {
        this.user.password = (e.target as HTMLInputElement).value;
      }
    }
  }

  handleSubmit() {
    console.log(this.users)
  }

  handleCheckBox() {
    this.isChecked = !this.isChecked;
  }

  handleCurrentSlide(slide: string) {
    this.currentSlide.emit(slide)
  }
}
