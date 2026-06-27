import { Component, output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'om-toolbar',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {

  toggleMenu = output<boolean>();
  isOpen = false;

  onToggleMenu() {
    this.isOpen != this.isOpen;
    this.toggleMenu.emit(this.isOpen);
  }

}
