import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDropdownComponent } from './button-dropdown/button-dropdown.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LinkDropdownItemComponent } from './link-dropdown-item/link-dropdown-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ButtonDropdownComponent,
    LinkDropdownItemComponent
  ],
  exports: [
    ButtonDropdownComponent,
    LinkDropdownItemComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule
  ]
})
export class ButtonsModule { }
