import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { User } from '../../../../types';
import { SignupService } from './services/signup.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnChanges {
  @Output() currentSlide = new EventEmitter<string>();
  @Output() createdUser = new EventEmitter<User | any>();
  @Input() users: User[] = [];
  
  user: User = {
    id: '',
    name: '',
    username: '',
    password: '',
    photo: ''
  }
  initialImg : File | any;
  existingUsertoast = {
    status: false,
    msg: 'shitposter already exists'
  }
  newUserToast = {
    status: false,
    msg: 'shitposter created'
  }

  constructor(private spinner: NgxSpinnerService, private signupServce: SignupService){}

  handleChange(e: Event | null = null, key: string) {
    if (e && e.target) {
    const value = (e.target as HTMLInputElement).value

      switch(key) {
        case "name": 
        this.user.name = value;
        break;
        case "username": 
        this.user.username = value;
        break;
        case "password": 
        this.user.password = value;
        break;
      }
    }
  }
  
  handleImage(e: Event | null = null) {
    if (e && e.target) {
      const inputElement = e.target as HTMLInputElement;
      if (inputElement.files) {
        const files = Array.from(inputElement.files);
        this.initialImg = files[0]
      }
    }
  }

  handleSubmit() {
    this.spinner.show()
    let existingUser = this.users.find(foundUser => foundUser.username === this.user.username)
    if(existingUser) {
      this.existingUsertoast.status = true;
      setTimeout(() => {
        this.existingUsertoast.status = false;
      }, 2000); 
      this.spinner.hide()
    } else {
      this.signupServce.createUser(this.user, this.initialImg).subscribe(user => {
      this.createdUser.emit(user);
        this.newUserToast.status = true;
      setTimeout(() => {
        this.newUserToast.status = false;
      }, 2000); 
        this.spinner.hide()
      })
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }


  handleCurrentSlide(slide: string) {
    this.currentSlide.emit(slide)
  }
  
}
