import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root',
})
export class PersonneServiceService {
  personnes: Personne[] = [
    { firstname: 'Gaston', lastname: 'Lagaffe', phoneNumber: '+33678912345' },
    {
      firstname: 'Jeanne',
      lastname: 'De chez Smith',
      phoneNumber: '',
    },
    {
      firstname: 'jules',
      lastname: 'Mademoiselle',
      phoneNumber: '+33678912345',
    },
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
