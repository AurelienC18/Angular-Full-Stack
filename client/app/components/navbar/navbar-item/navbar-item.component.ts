import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent {

  constructor() { }

  @Input() public name: string = 'Default name';
  @Input() public route: string = '/';
  @Input() public exact: boolean = false;

}
