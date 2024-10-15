import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompRoutingModule } from './comp-routing.module';
import { Comp1Component } from './comp1.component';
import { Comp2Component } from './comp2.component';
import { Comp3Component } from './comp3.component';
import { gaurds } from './gaurds';


@NgModule({
  declarations: [
    Comp1Component,
    Comp2Component,
    Comp3Component
  ],
  imports: [
    CommonModule,
    CompRoutingModule,
  ],
  providers:[gaurds]
})
export class ComponentModule { }
