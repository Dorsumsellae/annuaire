import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { Personne } from '../models/personne';
import { MessagesService } from '../services/messages.service';
import { PersonneServiceService } from '../services/personne-service.service';

@Component({
  selector: 'app-personne-ajouter',
  templateUrl: './personne-ajouter.component.html',
  styleUrls: ['./personne-ajouter.component.scss'],
})
export class PersonneAjouterComponent implements OnInit {
  @Output()
  ajoutPersonneEventEmitter = new EventEmitter<Personne>();

  form = new FormGroup({
    civilite: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    adresse: new FormControl(''),
    phoneNumber: new FormControl('', [Validators.pattern('[- +()0-9]{12}')]),
  });

  public traiterFormulaire() {
    //ajouter la personne à la liste
    if (!this.form.invalid) {
      let personne = this.formValueToPersonne();
      this.ps.ajouterPersonne(personne).subscribe((res) => {
        console.log('Res add personne');
        console.log(res);
        this.ms.createAddPersonneMessage(personne);
      });
      console.log('Form.value to personne');
      console.log(this.formValueToPersonne());
      this.form.reset();
      this.ajoutPersonneEventEmitter.emit(personne);
    }
  }

  formValueToPersonne(): Personne {
    return {
      prenom: this.form.value.firstname.toLowerCase(),
      nom: this.form.value.lastname.toUpperCase(),
      telephone: this.form.value.phoneNumber,
      civilite: this.form.value.civilite,
      adresse: this.form.value.adresse,
    } as Personne;
  }

  constructor(
    private ps: PersonneServiceService,
    private ms: MessagesService
  ) {}

  ngOnInit(): void {}
}
