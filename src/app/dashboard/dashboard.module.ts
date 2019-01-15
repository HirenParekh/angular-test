import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { AddDataComponent } from './components/add-data/add-data.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ColorPickerComponent,
    DashboardComponent,
    AddDataComponent
  ],
  imports:[
      CommonModule,
      FormsModule,
      ReactiveFormsModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
