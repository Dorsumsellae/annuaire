import { Component, OnInit } from '@angular/core';
import { PERSONNES } from '../mock-personne';
import { Personne } from '../personne';

@Component({
  selector: 'app-personne-lister',
  templateUrl: './personne-lister.component.html',
  styleUrls: ['./personne-lister.component.scss'],
})
export class PersonneListerComponent implements OnInit {
  personnes: Personne[] = PERSONNES;

  constructor() {}

  ngOnInit(): void {}

  public suppPersonne(personne: Personne) {
    console.log(`La personne ${personne.firstname} a été supprimée`);
  }
}
