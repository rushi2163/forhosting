import { Component,DoCheck,ElementRef,EventEmitter,Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnChanges,DoCheck,OnDestroy{
  ngOnDestroy(): void {
console.log("component is destroyed");
  }
  ngDoCheck(): void {
    console.log('do check');
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("called",this.info);
  }
  @Input() info:any;
  // @Input() show!:boolean;
 

}
