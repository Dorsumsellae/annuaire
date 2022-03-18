import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Personne } from '../models/personne';
import { PersonneServiceService } from '../services/personne-service.service';

@Component({
  selector: 'personne-popup',
  templateUrl: 'personne-popup.component.html',
})
export class PersonnePopup {
  form = new FormGroup({
    civilite: new FormControl(this.data.civilite, Validators.required),
    firstname: new FormControl(this.data.prenom, Validators.required),
    lastname: new FormControl(this.data.nom, Validators.required),
    adresse: new FormControl(this.data.adresse),
    phoneNumber: new FormControl(this.data.telephone, [
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
    ]),
  });
  formValueToPersonne(): Personne {
    return {
      prenom: this.form.value.firstname.toLowerCase(),
      nom: this.form.value.lastname.toUpperCase(),
      telephone: this.form.value.phoneNumber,
      civilite: this.form.value.civilite,
      adresse: this.form.value.adresse,
      id: this.data.id,
    } as Personne;
  }

  updatePersonne() {
    if (!this.form.invalid) {
      let personne = this.formValueToPersonne();
      console.log(personne);
      this.ps.updatePersonne(personne).subscribe();
    }
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Personne,
    private ps: PersonneServiceService
  ) {}
}
