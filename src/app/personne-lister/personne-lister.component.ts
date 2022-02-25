import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../models/personne';
import { PersonneServiceService } from '../services/personne-service.service';

@Component({
  selector: 'app-personne-lister',
  templateUrl: './personne-lister.component.html',
  styleUrls: ['./personne-lister.component.scss'],
})
export class PersonneListerComponent implements OnInit {
  personnes: Personne[] = [];
  constructor(private ps: PersonneServiceService, private router: Router) {
    this.personnes = this.ps.getPersonne();
  }

  ngOnInit(): void {}

  traiterSuppressionPersonne(personneAsupprimer: Personne): void {
    this.ps.supprimerPersonne(personneAsupprimer);
    this.personnes = this.ps.getPersonne();
  }
}
