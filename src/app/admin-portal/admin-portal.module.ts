import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';


@NgModule({
  declarations: [
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
