/**
 * this is the main component of application it will handle its child components and pass data and events between them.
 */

import { Component, OnInit } from '@angular/core';
import { DataObj } from './models/data.model';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //stores all the data objects in memory and share it with its child components
  dataObjects:DataObj[];

  //keep the reference of currently selected data object.
  selectedDataObj:DataObj;

  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {
    this.getDataObjects();
  }

  onItemSelectionEventHandler(selectedItem){
    this.selectedDataObj = selectedItem;
  }

  getDataObjects(){
    this.dashboardService.retrieveData()
    .subscribe(data => {
      this.dataObjects = data;
      console.log(this.dataObjects);
    },error => {
      console.log("http error => ",error);
    })
  }

  onItemColorChanged(color,data){
    data.color = color;
  }

  onBtnDeleteItemClick(row){
    this.dataObjects.splice(this.dataObjects.indexOf(row),1);
  }

  onAddNewDataEventHandler(data){
    /**
     * store the new data item object on the local array of dataObjects
     * it the application uses actual api we can call the service here and on a successful response
     * we can update the local array of data Objects.
     */
    this.dataObjects.push(data);
  }

}
