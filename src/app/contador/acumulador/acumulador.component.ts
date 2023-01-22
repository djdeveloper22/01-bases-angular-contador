import { Component} from '@angular/core';

@Component({
  selector: 'AppAcumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.scss']
})

export class AppAcumulador{
  title: string = 'Acumulador';
  base: number = 5;
  numero: number = 0;

  operAcumulador(valor: number){
    return this.numero += valor;
  }

  resetAcumulador(){
    return this.numero = 0;
  }
}
