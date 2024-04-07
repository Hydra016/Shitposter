import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from './services/auth.service';
import { User } from '../../../types';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  currentSlide = 'login';
  users: User[] = [];
  @Output() loggedInUser = new EventEmitter<User>()

  handleCurrentSlide(slide: string) {
    this.currentSlide = slide
  }

  constructor(private authService: AuthService) {}

  handleCreatedUser(createdUser: User) {
   this.loggedInUser.emit(createdUser)
  }

  ngOnInit(): void {
    this.authService.getUsers().subscribe((users: User[]) => {
      this.users = users
    });
  }
}
