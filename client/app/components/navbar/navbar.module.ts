import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from 'client/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { ButtonsModule } from '../buttons/buttons.module';



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarItemComponent
  ],
  exports: [
    NavbarComponent,
    NavbarItemComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    SharedModule,
    RouterModule,
    
  ]
})
export class NavbarModule { }
