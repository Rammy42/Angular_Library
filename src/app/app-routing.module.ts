import { LoginComponent } from './login/login.component';
import { EmpComponent } from './emp/emp.component';
import { DptComponent } from './dpt/dpt.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path:"dpt",component:DptComponent 
},
{
  path :"emp",component:EmpComponent
},
{
  path:"login",component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmpComponent,DptComponent,LoginComponent]
