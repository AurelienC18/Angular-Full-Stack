import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

	public constructor() { }

	@Output() public collapse: EventEmitter<any> = new EventEmitter<any>();


}
