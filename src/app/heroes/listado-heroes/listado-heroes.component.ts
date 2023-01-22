import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.scss']
})
export class ListadoHeroesComponent {
  heroes: string[] = ['SpiderMan', 'Hulk', 'Saitama', 'Goku', 'Cap', 'SuperMan', 'Aquaman', 'Naruto'];
  deleteHeroe: string[] = [];
  show: boolean = false;

  eraseHeroe(pos: number): string[]{
    this.show = true;
    return this.deleteHeroe = this.heroes.splice(pos, 1);
  }
}
