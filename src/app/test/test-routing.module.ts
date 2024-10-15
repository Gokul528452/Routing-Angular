import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';
import { Test2Component } from '../test2/test2.component';

const testroute:Routes=[
  { path:"",component:TestComponent },
  {path:"test2",component:Test2Component}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(testroute)
  ],
  exports:[]
})
export class TestRoutingModule { }
