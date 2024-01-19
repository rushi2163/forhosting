import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  constructor(private service:ServiceService ){}
  // @ViewChild(ChildComponent) demo :ChildComponent=new ChildComponent;
  data:any;
  testConnection(){
    this.service.testConnection().subscribe((res)=>{this.data=res})
  }
}
