import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  @Input('valor') progreso:number=50;
  @Input() btnClass:string ="btn-primary"

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();
  


  //Ejemplo para renombrar el argumento desde 
  //porgrees.component.html 
  //@Input('valor') progreso:number=50;

  //get getPocentaje(){
   // return `${this.progreso}%`;
  //}
  constructor() { }

  ngOnInit()  {
    this.btnClass=`btn ${this.btnClass}`;
  }


  cambiarValor(valor:number){
      if(this.progreso<=0){
        this.valorSalida.emit(0);
        this.progreso=0
    }
    if(this.progreso>100){
      this.valorSalida.emit(100);
      this.progreso=100
    }
    this.progreso=this.progreso+valor;
    this.valorSalida.emit(this.progreso);

  }

  onChange(nuevoValor:number){
    if(nuevoValor>=100){
      this.progreso=100;
    }else if (nuevoValor<=0){
      this.progreso=0;
    }else{
      this.progreso=nuevoValor;
    }
    //console.log("Hey",valor);
    this.valorSalida.emit(this.progreso);

  }
  
}
