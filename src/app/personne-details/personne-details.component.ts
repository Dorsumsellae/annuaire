import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { PersonneServiceService } from '../services/personne-service.service';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.scss'],
})
export class PersonneDetailsComponent implements OnInit {
  @Input()
  personne!: Personne;

  @Input()
  i!: number;
  constructor(private ps: PersonneServiceService) {}

  ngOnInit(): void {}

  public suppPersonne(personne: Personne): void {
    this.ps.supprimerPersonne(personne);
    console.log(`La personne ${personne.firstname} a été supprimée`);
  }
}
