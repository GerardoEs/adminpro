import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {
  
  leyenda1:string[]=["Ventas Sears","Ventas SAMS","Ventas Liverpool","Ventas Fabricas de Francia"];
  labels1:string[]=["Diarias","En linea","Por telefono"];
  data1= [ 100, 200, 300 ];
  

  constructor() { }

  ngOnInit(): void {
  }

  

}
