// import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragon-ball-page',
  templateUrl: './dragonball-page.component.html',
  imports: [/*NgClass*/],
})
export class DragonBallPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 9000 },
    // { id: 3, name: 'Gohan', power: 7800 },
    // { id: 5, name: 'Yamcha', power: 500 },
    // { id: 4, name: 'Piccolo', power: 6200 },
  ]);

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   };
  // });

  addCharacter() {
    if(!this.name() || !this.power() || this.power() <= 0){
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((list) => [...list, newCharacter]);
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}