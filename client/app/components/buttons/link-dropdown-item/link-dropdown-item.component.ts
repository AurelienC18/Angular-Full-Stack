import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-dropdown-item',
  templateUrl: './link-dropdown-item.component.html',
  styleUrls: ['./link-dropdown-item.component.scss']
})
export class LinkDropdownItemComponent implements OnInit {

  public constructor() { }

  @Input() public label: string = '';
  @Input() public route: string = '/';

  public ngOnInit(): void {
  }

}
