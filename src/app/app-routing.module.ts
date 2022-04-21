import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserWelcomeComponent } from './user-portal/user-welcome/user-welcome.component';
import { UserLoginComponent } from './user-portal/user-login/user-login.component';
import { UserRegisterComponent } from './user-portal/user-register/user-register.component';
import { AdminWelcomeComponent } from './admin-portal/admin-welcome/admin-welcome.component';

const routes: Routes = [
  {path: 'userPortal', component:UserWelcomeComponent,
  children:[
    {path:'userLogin', component:UserLoginComponent},
    {path:'userRegister', component:UserRegisterComponent}
  ]
  },
  {path:'adminPortal', component:AdminWelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
