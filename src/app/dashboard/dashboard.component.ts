import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
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
  public buttonMode: boolean = false;
  public currentId: any;
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
    if(!this.buttonMode){
      if(data.value.accepted == "" || data.value.applications == "" ||
      data.value.hold == "" || data.value.rejected == "" || 
      data.value.name == ""){

      }
      else{
  console.log('submitted',data.value);
  this.dashboardService.addStatus(data.value)
  .subscribe((res:any)=>{
    this.dataList = res
    console.log("add",res);
    window.location.reload();
  })
}
}
else{
  this.dashboardService.updateStatus(this.currentId.id , data)
  .subscribe((res:any)=>{
    this.dataList = res
    console.log("edit",res);
    window.location.reload();
  })
}
  }
  editData(id: any){
    this.currentId = id;
   let currentRecord = this.status.find((s: { id: any; }) => s.id == id.id);
   console.log("current",currentRecord);
   this.statusData.setValue({
    applications: currentRecord.applications,
    rejected: currentRecord.rejected,
    accepted: currentRecord.accepted,
    hold: currentRecord.hold,
    name:currentRecord.name
   })
   this.buttonMode = true;
  }
  delete(data: any){
this.dashboardService.deleteStatus(data.id).subscribe((res:any) =>{
  console.log("delete",res);
  this.dataList = res;
  window.location.reload();
  
})
  }
}
