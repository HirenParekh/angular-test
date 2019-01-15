import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataObj } from '../../models/data.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input()
  dataObjects:DataObj[];

  @Output()
  itemSelectionEvent:EventEmitter<DataObj> = new EventEmitter();

  selectedItem:DataObj;

  constructor() { }

  ngOnInit() {
  }

  onItemSelect(dataObj){
    this.selectedItem = dataObj;
    this.itemSelectionEvent.emit(dataObj);
  }

}
