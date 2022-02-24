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
    return this.personnes;
  }

  ajouterPersonne(personne: Personne): void {
    this.personnes.push(personne);
  }

  supprimerPersonne(personne: Personne): void {
    const index = this.personnes.indexOf(personne);
    if (index > -1) {
      this.personnes.splice(index, 1);
    }
    console.log(this.personnes);
  }
}
