import { Component } from '@angular/core';

@Component({
  selector: 'HeroeComponent',
  templateUrl: 'heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})

export class HeroeComponent{
  nombreHeroe: string = 'Iron-man';
  edad: number = 45;
  habilidad: string = 'volar y lanza rayos';
  nacionalidad: string = 'Americano'

  get capitalizado(): string{
    return this.nombreHeroe.toUpperCase();
  }

  getDatosHeroe(): string{
    return `
      nombre: ${this.nombreHeroe}
      edad: ${this.edad}
      habilidad: ${this.habilidad}
      nacionalidad: ${this.nacionalidad}
    `
  }

  cambiarNombreHeroe(): string{
    return this.nombreHeroe = 'Spider-Man';
  }
}
