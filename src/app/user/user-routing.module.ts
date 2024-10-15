import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';


const userroute:Routes=[

  {path:"",component:UserComponent},
  
  {
    path:'test',
    loadChildren:() => import ('../test/test.module').then(m=>m.TestModule)
  }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(userroute)
  ],
  exports:[ RouterModule ]
})
export class UserRoutingModule { }
