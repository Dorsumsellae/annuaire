import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { MessagesService } from '../services/messages.service';
import { PersonneServiceService } from '../services/personne-service.service';

@Component({
  selector: 'app-personne-lister',
  templateUrl: './personne-lister.component.html',
  styleUrls: ['./personne-lister.component.scss'],
})
export class PersonneListerComponent implements OnInit {
  personnes: Personne[] = [];

  updatePersonne() {
    this.ps
      .getPersonne()
      .subscribe((personnes: Personne[]) => (this.personnes = personnes));
  }

  constructor(private ps: PersonneServiceService, private ms: MessagesService) {
    this.updatePersonne();
  }

  ngOnInit(): void {}

  traiterSuppressionPersonne(personneAsupprimer: Personne): void {
    this.ps.supprimerPersonne(personneAsupprimer).subscribe((res: any) => {
      if (res?.count) {
        this.updatePersonne();
        this.ms.createDelPersonneMessage(personneAsupprimer);
      } else {
        console.log('Erreur suppression personne');
      }
    });
  }
}
