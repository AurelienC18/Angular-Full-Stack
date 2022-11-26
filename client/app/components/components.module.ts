import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { ButtonsModule } from './buttons/buttons.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    ButtonsModule
  ],
  exports: [
    NavbarModule,
    ButtonsModule
  ]
})
export class ComponentsModule { }
