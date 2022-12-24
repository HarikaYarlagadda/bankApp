import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 hide = true;
 public userName: any
 public password: any ;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(login: any){
    console.log("form submitted",login.value)
   // window.location.pathname = './home';
  //  this._http.get<any>("http://localhost:3000/login")
  //   .subscribe(res=>{
  //     const user = res.find((a:any)=>{
  //       return a.userName === login.value.userName && a.password === login.value.password
  //     });
  //   })
  }
}
