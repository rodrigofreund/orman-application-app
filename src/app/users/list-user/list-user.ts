import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface UserListItem {
  name: string;
  email: string;
  phone: string;
}

const ELEMENT_DATA: UserListItem[] = [
  { name: 'Hydrogen', email: 'h@gmail.com', phone: 'H'},
  { name: 'Helium', email: 'h@gmail.com', phone: 'He'},
  { name: 'Lithium', email: 'h@gmail.com', phone: 'Li'},
  { name: 'Beryllium', email: 'h@gmail.com', phone: 'Be'},
  { name: 'Boron', email: 'h@gmail.com', phone: 'B'},
  { name: 'Carbon', email: 'h@gmail.com', phone: 'C'},
  { name: 'Nitrogen', email: 'h@gmail.com', phone: 'N'},
  { name: 'Oxygen', email: 'h@gmail.com', phone: 'O'},
  { name: 'Fluorine', email: 'h@gmail.com', phone: 'F'},
  { name: 'Neon', email: 'h@gmail.com', phone: 'Ne'},
];

@Component({
  selector: 'om-list-user',
  imports: [MatTableModule],
  templateUrl: './list-user.html',
  styleUrl: './list-user.scss',
})
export class ListUser {
  displayedColumns: string[] = ['name', 'email', 'phone'];
  dataSource = ELEMENT_DATA;
}
