import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  // @ViewChild(ChildComponent) demo :ChildComponent=new ChildComponent;
 data="dynamic data"
 show=true
 calldata(){
  this.data="changed data"
  this.show=false
 }
}
