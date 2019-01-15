import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { dataColors } from '../../constants/data-color.constants';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  colors = dataColors;

  isActive:boolean = false;

  @Input()
  selectedColor:string = this.colors[0];

  @Output()
  colorSelectionEvent:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
   
  }

  onColorSelect(color){
    this.selectedColor = color;
    this.colorSelectionEvent.emit(color);
  }

}
