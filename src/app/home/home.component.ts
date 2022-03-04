import { Component, OnInit } from '@angular/core';
import { PersonneServiceService } from '../services/personne-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = 'Annuaire';
  nbrPersonne: number = -1;

  updateNbrPersonne() {
    this.ps.countPersonne().subscribe((nbr) => (this.nbrPersonne = nbr.count));
  }

  constructor(private ps: PersonneServiceService) {
    this.updateNbrPersonne();
  }

  ngOnInit(): void {}
}
