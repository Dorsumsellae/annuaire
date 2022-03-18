import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    phoneNumber: new FormControl('', [
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
    ]),
  });

  public traiterFormulaire() {
    //ajouter la personne à la liste
    if (!this.form.invalid) {
      let personne = this.formValueToPersonne();
      this.ps.ajouterPersonne(personne).subscribe((res) => {
        this.ms.createAddPersonneMessage(personne);
        this.ajoutPersonneEventEmitter.emit(personne);
      });
      this.form.reset();
      Object.keys(this.form.controls).forEach((key) => {
        this.form.get(key)?.setErrors(null);
      });
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
