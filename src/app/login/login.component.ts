import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  public loginForm!: FormGroup;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [""],
      password: [""]
    })
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
}
