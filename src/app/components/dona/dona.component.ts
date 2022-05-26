import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';




@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  @Input() leyenda:string='SIN DATOS';
   

  


  constructor() { }

  ngOnInit(): void {
  }

  
  
  
  

  @Input('labels') doughnutChartLabels:string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];

  @Input() data= [350, 450, 100];

  public  doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
         datasets: [
           { data: this.data ,
            backgroundColor: ['#7DD8D9','#D97D93','#77DA9A']
           }
        ],
      
  };
  
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnChanges(){
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{ data: this.data }],
    };
  } 


  
}
