import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessagesComponent } from '../messages/messages.component';

import { Personne } from '../models/personne';
import { MessagesService } from '../services/messages.service';
import { PersonneServiceService } from '../services/personne-service.service';

@Component({
  selector: 'app-personne-ajouter',
  templateUrl: './personne-ajouter.component.html',
  styleUrls: ['./personne-ajouter.component.scss'],
})
export class PersonneAjouterComponent implements OnInit {
  constructor(
    private ps: PersonneServiceService,
    private ms: MessagesService
  ) {}

  ngOnInit(): void {}

  public traiterFormulaire(form: NgForm) {
    //ajouter la personne à la liste
    if (!form.invalid) {
      let personne = this.formValueToPersonne(form.value);
      this.ps.ajouterPersonne(personne).subscribe((res) => {
        console.log('Res add personne');
        console.log(res);
        this.ms.createAddPersonneMessage(personne);
      });
      console.log('Form.value to personne');
      console.log(this.formValueToPersonne(form.value));
      form.resetForm();
    }
  }
  formValueToPersonne(formValue: any): Personne {
    return {
      prenom: formValue.firstname.toLowerCase(),
      nom: formValue.lastname.toUpperCase(),
      telephone: formValue.phoneNumber,
    } as Personne;
  }
}
