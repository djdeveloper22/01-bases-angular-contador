import { NgModule } from '@angular/core';
import { HeaderComponent } from '../contador/acumulador/header.component';
import { ListadoHeroesComponent } from './listado-heroes/listado-heroes.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations : [
    //nos dice que secciones o componentes  contiene este modulo
    ListadoHeroesComponent
  ],
  providers: [],
  //que cosas quiero que sean visibles
  exports: [
    ListadoHeroesComponent
  ],

  imports: [
    //aqui solo importamos modulos
    CommonModule //nos permite importar todas las directivas como ngIf, ngForOf, ngSwitch
  ],
})

export class HeroesModule{}
