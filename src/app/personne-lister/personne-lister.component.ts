import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Personne } from '../models/personne';
import { MessagesService } from '../services/messages.service';
import { PersonneServiceService } from '../services/personne-service.service';

@Component({
  selector: 'app-personne-lister',
  templateUrl: './personne-lister.component.html',
  styleUrls: ['./personne-lister.component.scss'],
})
export class PersonneListerComponent implements OnInit, OnChanges {
  @Input()
  event!: Personne;

  @Input()
  updateEvent!: Personne;

  @Output()
  displayContact: boolean = false;

  changeToggle!: MatSlideToggleChange;
  personnes: Personne[] = [];
  modif: boolean = false;

  updatePersonne() {
    this.ps
      .getPersonne()
      .subscribe((personnes: Personne[]) => (this.personnes = personnes));
    console.log('update personne');
  }

  traiterSuppressionPersonne(personneAsupprimer: Personne): void {
    this.ps.supprimerPersonne(personneAsupprimer).subscribe((res: any) => {
      if (res?.count) {
        this.updatePersonne();
        this.ms.createDelPersonneMessage(personneAsupprimer);
        this.modif = true;
      } else {
        console.log('Erreur suppression personne');
      }
    });
  }

  updateModif(modif: boolean) {
    if (modif) {
      this.modif = false;
      console.log('updateModif');
    }
  }

  updateDisplayContact(change: MatSlideToggleChange) {
    if (change != undefined) {
      this.displayContact = change.checked;
    }
  }

  constructor(
    private ps: PersonneServiceService,
    private ms: MessagesService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.updatePersonne();
    this.updateDisplayContact(this.changeToggle);
  }
}
