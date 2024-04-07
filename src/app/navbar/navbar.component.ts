import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() screen: string = '';
  @Output() changeScreen = new EventEmitter<string>();
  @Output() isLoggedIn = new EventEmitter<boolean>();
  @Input() user: User | null = {
    id: '',
    name: '',
    username: '',
    password: '',
    photo: '',
  };
  showMenu: boolean = false;

  handleChangeScreen(screen: string) {
    this.changeScreen.emit(screen);
  }

  handleShowMenu() {
    this.showMenu = !this.showMenu;
  }

  logoutUser() {
    localStorage.clear();
    this.isLoggedIn.emit(false);
  }
}
