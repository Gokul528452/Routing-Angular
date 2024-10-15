import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Comp3Component } from './comp3.component';
import { Comp2Component } from './comp2.component';
import { Comp1Component } from './comp1.component';
import { gaurds } from './gaurds';


const comproutes:Routes=[
  { path: '', component: Comp1Component },
  { path: 'component1', component: Comp1Component,
    children:[{path:'comp1component3', component:Comp3Component}] 
  },
  { path: 'component2',component: Comp2Component,canActivate:[gaurds] },
  { path: 'component3',component: Comp3Component },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(comproutes)
  ],exports:[RouterModule]
})
export class CompRoutingModule {

 }
