import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Node } from '../../models/node.model';
import { NodesStore } from '../services/nodesStore.service';

@Component({
  selector: 'app-node-item',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() node: Node;
  @Output() ToogleExpand = new EventEmitter<Node>();
  @Input() expanded: boolean;

  blocks : Array<any> = [];
  constructor(public store: NodesStore){}

  handleToogleExpand(node: Node): void {
    this.ToogleExpand.emit(node);
  }

  ngOnInit(): void {
    if (this.node.online){
      this.store.getBlocks(this.node.url).subscribe( ({ data }) =>{
        console.log(`Node ${this.node.name}`, data);
        this.blocks = data;
      })
    }
  }

}
