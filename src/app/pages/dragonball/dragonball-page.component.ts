import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  templateUrl: './dragonball-page.component.html',
})
export class DragonBallPageComponent {
  characters = signal<Character[]>([
    {id:1, name:'Goku', power: 9001},
    {id:2, name:'Vegeta', power: 8500},
    {id:3, name:'Gohan', power: 7800},
    {id:4, name:'Piccolo', power: 6200},
  ]);
}
