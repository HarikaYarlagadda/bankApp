import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ObjectUnsubscribedError, Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {
  hide = true;
  // public loginForm!: FormGroup;
  loginForm = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl('')
  })
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    //promises - used to handle asynchronous data
    const promises = new Promise((resolve) =>{
      setTimeout(()=>{
        resolve('working'),
        resolve('working1'),
        resolve('working2')
      },1000)
      })
      promises.then(result => console.log(result));

//observables
      const obv = new Observable(subs =>{
        setTimeout(()=>{
          subs.next('ob work1'),
          subs.next('ob work2')
        },1000)
        });
        obv.subscribe(result=>console.log(result))
  }


  
  
  get uservalid(){
    return this.loginForm.get('userName')
  }
  get passvalid(){
    return this.loginForm.get('password') 
  }
  onSubmit() {
    console.log("form submitted", this.loginForm.value);
    this.http.get<any>("http://localhost:3000/login").subscribe(res => {
      const user = res.find((data: any) => {
        return data.userName === this.loginForm.value.userName && data.password === this.loginForm.value.password
      });
      console.log("form submitted2", user);
      if (user) {
        alert("login success");
        this.loginForm.reset();
        this.router.navigate(['home'])
      } else {
        alert("Invalid userName and password");
        this.loginForm.reset();
      }
    })
  }
  onClear(){
    this.loginForm.reset();
  }
  // promises - used to handle asynchronous data


}
