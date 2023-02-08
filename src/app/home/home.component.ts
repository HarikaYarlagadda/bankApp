import { Element } from '@angular/compiler';
import { Component, Input, OnInit, ViewChild, AfterViewInit ,ElementRef, ViewChildren
,QueryList, EventEmitter,Output} from '@angular/core';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,AfterViewInit {
  // to pass data from child to parent we use @output
  @Output()
  notify = new EventEmitter<string>
  // for view child
  // @ViewChildren("addcolor")marker!:ElementRef;  
  //  forview children
  @ViewChildren("addcolor")marker!:QueryList<any>;
  @Input() dateinput:any;
  public fname:any;
  public lname:any;
  constructor() { }

  ngOnInit(): void {
    this.lname =sessionStorage.getItem("name1")
  }
ngAfterViewInit(): void {
  console.log(this.marker)
  // for view child
  //this.marker.nativeElement.style.color = "orange";
  // for view children
  this.marker.first.nativeElement.style.color ="violet";
  this.marker.last.nativeElement.innerHTML ="Text changed";
  this.marker.toArray()[1].nativeElement.style.color ="orange";
  console.log( 'arrayvaleus' ,this.marker)
}
passData(){
    this.notify.emit("Hi This msg is coming from child")
}

}
