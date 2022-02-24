import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { PersonneServiceService } from '../services/personne-service.service';

@Component({
  selector: 'app-personne-lister',
  templateUrl: './personne-lister.component.html',
  styleUrls: ['./personne-lister.component.scss'],
})
export class PersonneListerComponent implements OnInit {
  personnes: Personne[] = [];
  constructor(private ps: PersonneServiceService) {}

  ngOnInit(): void {
    this.personnes = this.ps.personnes;
  }
}
