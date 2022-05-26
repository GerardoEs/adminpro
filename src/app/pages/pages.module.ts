import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ApproutingModule } from '../approuting.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    Grafica1Component,
    ProgressComponent,
    DashboardComponent,
    PagesComponent
  ],
  imports: [
   CommonModule,
   SharedModule,
   ApproutingModule,
   FormsModule,
   ComponentsModule,
  
  ],
  exports:[
    Grafica1Component,
    ProgressComponent,
    DashboardComponent,
    PagesComponent
  ]
})
export class PagesModule { }
