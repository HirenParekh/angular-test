import { Component, OnInit } from '@angular/core';
import { DataObj } from './models/data.model';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataObjects:DataObj[];

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
    this.dataObjects.push(data);
  }

}
