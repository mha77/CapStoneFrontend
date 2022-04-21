import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFoodComponent } from './edit-food/edit-food.component';

const routes: Routes = [
  {path: 'editFood/:food', component:EditFoodComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
