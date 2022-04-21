import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

interface Food{
  id:Number,
  foodName:String,
  cuisine:String,
  description:String,
  price:Number,
  enabled:Boolean
}

@Component({
  selector: 'app-choose-cart',
  templateUrl: './choose-cart.component.html',
  styleUrls: ['./choose-cart.component.css']
})
export class ChooseCartComponent implements OnInit {

  foods : Food[] = []

  rowSelected(food:any){
    
  }

  getEnabledFood()
    {
      return this.http.get<Food[]>('http://localhost:9092/getEnabledFoodList').subscribe((response) => {this.foods = response});
    }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
