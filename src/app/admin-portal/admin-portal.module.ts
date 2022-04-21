import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';


@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminWelcomeComponent
  ],
  imports: [
    CommonModule,
    AdminPortalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminPortalModule { }
