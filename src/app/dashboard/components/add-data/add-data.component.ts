import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataObj } from '../../models/data.model';
import { dataColors } from '../../constants/data-color.constants';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  addDataForm:FormGroup;

  @Output()
  addNewDataEvent:EventEmitter<DataObj> = new EventEmitter();

  constructor() {
    this.addDataForm = new FormGroup({
      title:new FormControl('',[Validators.required]),
      text:new FormControl('',[Validators.required]),
      color:new FormControl(''),
    })
  }
  

  ngOnInit() {
  }

  onItemColorChanged(color){
    this.addDataForm.get('color').setValue(color);
  }

  onBtnAddDataClick(){
    if(!this.addDataForm.valid){
      return;
    }
    let value = this.addDataForm.value;
    this.addNewDataEvent.emit({
     id:+new Date().getTime().toString().substr(10,5),
     title:value.title,
     text:value.text,
     color:value.color ? value.color : dataColors[0]
    })
    this.addDataForm.reset();
  }

}
