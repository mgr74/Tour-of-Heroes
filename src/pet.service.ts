import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pet } from './pet';
import { PETHEROES } from './mock-pets';

@Injectable({ providedIn: 'root' })
export class PetService {
  constructor() {}

  getPets(): Observable<Pet[]> {
    const pets = of(PETHEROES);
    return pets;
  }
}
