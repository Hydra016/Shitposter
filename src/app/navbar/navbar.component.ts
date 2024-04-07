import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() screen: string = ''
  @Output() changeScreen =  new EventEmitter<string>();

  handleChangeScreen(screen: string) {
    this.changeScreen.emit(screen)
  }
}
