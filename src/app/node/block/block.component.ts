import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  @Input() block:any = {}
  constructor() { }

  ngOnInit() {
    
  }

}
