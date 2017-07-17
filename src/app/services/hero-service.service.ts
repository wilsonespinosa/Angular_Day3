import { HEROES } from './../mocks/heroes/mock-heroes';
import { Hero } from './../mocks/heroes/hero';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
      return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeroes()), 2000);
  });
}
}
