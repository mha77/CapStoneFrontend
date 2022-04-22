import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCartComponent } from './show-cart/show-cart.component';

const routes: Routes = [
  {path: 'ShowCart/:cart', component:ShowCartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
