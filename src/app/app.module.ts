import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPortalModule } from './user-portal/user-portal.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminPortalModule } from './admin-portal/admin-portal.module';
import { FoodModule } from './food/food.module';
import { CartModule } from './cart/cart.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserPortalModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminPortalModule,
    FoodModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
