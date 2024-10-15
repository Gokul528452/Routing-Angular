import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { Testcanload } from './comp/gaurds';


const routes: Routes = [  
   //wildcard routing its using for url does not match this page will render
   {
    path:'comp',
    loadChildren: () => import('./comp/component.module').then(m => m.ComponentModule),
    canLoad:[Testcanload]
  } ,
  {
    path:'user',
    loadChildren:() => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes,{})],    
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
