import { NgModule } from '@angular/core';
import { HeaderComponent } from './acumulador/header.component';
import { AppAcumulador } from './acumulador/acumulador.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    //nos dice que secciones o componentes  contiene este modulo
    //declaramos nuestros componentes
    HeaderComponent,
    AppAcumulador
  ],
  providers:[],
  exports:[HeaderComponent, AppAcumulador],
  imports:[
    CommonModule
  ]
})

export class ContadorModule{}
