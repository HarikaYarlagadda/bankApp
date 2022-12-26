import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public status: any ;
  public dataList!: [];
  public statusData!: FormGroup;
  constructor(private http: HttpClient, private route: Router,private formBuilder: FormBuilder,
    private dashboardService: DashboardService) { }

  ngOnInit(): void{
    this.statusData = this.formBuilder.group({
      applications: [""],
      rejected: [""],
      accepted: [""],
      hold: [""],
      name:[""]
    })
     this.dashboardService.getStatus()
    .subscribe((data: any) => {
      console.log("data",data)
      this.status = data;
     // this.applications = this.status[0].applications;
      console.log("appli",this.status)
    });
  }
  submit(data: any){
  console.log('submitted',data.value);
  this.dashboardService.addStatus(data.value)
  .subscribe((res:any)=>{
    this.dataList = res
    console.log("hi",res);
    window.location.reload();
  })
  }
  editData(id: any){
   let currentRecord = this.status.find((p: { id: any; }) => {p.id === id});
   console.log("current",id)
  }
}
