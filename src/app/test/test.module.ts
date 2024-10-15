import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component'
import { TestRoutingModule } from './test-routing.module';
import { Test2Component } from '../test2/test2.component';

@NgModule({
  declarations: [ TestComponent,
    Test2Component
   ],
  imports: [
    CommonModule,
    TestRoutingModule,

  ],
  
})
export class TestModule { }
