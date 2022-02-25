import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root',
})
export class PersonneServiceService {
  personnes: Personne[] = [
    { firstname: 'harry', lastname: 'Potter', phoneNumber: '+33678912345' },
    { firstname: 'harry', lastname: 'Potter', phoneNumber: '+33678912345' },
  ];
  constructor() {}

  getPersonne(): Personne[] {
    return this.personnes.slice();
  }

  ajouterPersonne(personne: Personne): void {
    this.personnes.push(personne);
  }

  supprimerPersonne(personne: Personne): void {
    this.personnes = this.personnes.filter((p) => p != personne);
  }
}
