import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface User {
  lname:String;
  fname:String;
  email:String;
  password:String;
  admin:boolean;
}

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  private registerUrl = 'http://localhost:9092/userRegister';
  
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  loading = true;
  errorMessage = "";

  register(value:any){
   
    const user = <User>{
      email:value.email,
      fname:value.fname,
      lname:value.lname,
      password:value.password,
      admin:value.admin
    }

    return this.http.post(this.registerUrl,user, {
      headers: this.headers}).subscribe(
        data => console.log('success', data),
        error => window.alert("User already exists")
      )
    }
 
  constructor(
    private http: HttpClient) {
      
     }

  ngOnInit(): void {
  }

}
