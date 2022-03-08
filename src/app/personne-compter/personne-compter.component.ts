import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PersonneServiceService } from '../services/personne-service.service';

@Component({
  selector: 'app-personne-compter',
  templateUrl: './personne-compter.component.html',
  styleUrls: ['./personne-compter.component.scss'],
})
export class PersonneCompterComponent implements OnInit, OnChanges {
  @Input()
  data!: number;

  nbrPersonne: number = -1;

  updateNbrPersonne() {
    this.ps.countPersonne().subscribe((nbr) => (this.nbrPersonne = nbr.count));
  }

  constructor(private ps: PersonneServiceService) {
    this.updateNbrPersonne();
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.updateNbrPersonne();
  }
}
