import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @ViewChild("home") viewdata !: HomeComponent;
  constructor() {
    sessionStorage.setItem("name1" , "Harika");
   }
   harika = false;
  public todayDate: any;
  public location: any;
  public user: any;
  public text : any;
  public text1 : any;
  public outputex: any;
  ngOnInit(): void {
    this.todayDate = new Date();
    this.location = 98765;
    this.user ={
      name: "harika",
      age:"24"
    };
    this.text= " hi my name is "+this.user.name;
    
    this.text1 = "happyBirthday";
  }
  add(data: any){
    
    this.viewdata.fname =data.value.namedata; ;
  }
  parentMethod(data: any){
    this.outputex = data 
  }
}
