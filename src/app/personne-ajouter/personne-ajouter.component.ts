import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Personne } from '../models/personne';
import { PersonneServiceService } from '../services/personne-service.service';

@Component({
  selector: 'app-personne-ajouter',
  templateUrl: './personne-ajouter.component.html',
  styleUrls: ['./personne-ajouter.component.scss'],
})
export class PersonneAjouterComponent implements OnInit {
  constructor(private ps: PersonneServiceService) {}

  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.pattern('[- +()0-9]{12}')]),
  });

  ngOnInit(): void {}

  public traiterFormulaire() {
    //console.log(form.value);
    //ajouter la personne à la liste
    if (!this.form.invalid) {
      this.ps.ajouterPersonne(this.reactiveFormTopersonne());
      this.resetForm();
    }
  }

  reactiveFormTopersonne(): Personne {
    return {
      firstname: this.form.value.firstname,
      lastname: this.form.value.lastname,
      phoneNumber: this.form.value.phoneNumber,
    } as Personne;
  }

  resetForm(): void {
    this.form.reset();
  }

  formValueToPersonne(formValue: any): Personne {
    return {
      firstname: formValue.firstname.toLowerCase(),
      lastname: formValue.lastname.toUpperCase(),
      phoneNumber: formValue.phoneNumber,
    } as Personne;
  }
}
