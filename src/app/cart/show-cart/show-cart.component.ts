import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


interface Food{
  id:Number,
  foodName:String,
  cuisine:String,
  description:String,
  price:Number,
  enabled:Boolean
}

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.css']
})
export class ShowCartComponent implements OnInit {

  cartItems: Array<Food> = []
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.cartItems = JSON.parse(params['cart']));
    console.log("cartItems: " + JSON.stringify(this.cartItems))
  }

  delete(food:any){
    this.cartItems.splice(this.cartItems.findIndex(item => item.id === food.id),1);
    console.log("item id "+ food.id) + " deleted"
  }

}
