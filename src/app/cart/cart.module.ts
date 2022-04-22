import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CartRoutingModule } from './cart-routing.module';
import { ChooseCartComponent } from './choose-cart/choose-cart.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ShowCartComponent } from './show-cart/show-cart.component';


@NgModule({
  declarations: [
    ChooseCartComponent,
    SearchFilterPipe,
    ShowCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
