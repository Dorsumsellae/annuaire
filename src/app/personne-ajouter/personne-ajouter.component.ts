import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Personne } from '../models/personne';
import { PersonneServiceService } from '../services/personne-service.service';

@Component({
  selector: 'app-personne-ajouter',
  templateUrl: './personne-ajouter.component.html',
  styleUrls: ['./personne-ajouter.component.scss'],
})
export class PersonneAjouterComponent implements OnInit {
  constructor(private ps: PersonneServiceService) {}

  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  phoneNumber = new FormControl('', [Validators.pattern('[- +()0-9]{12}')]);

  ngOnInit(): void {}

  public traiterFormulaire() {
    //console.log(form.value);
    //ajouter la personne à la liste
    if (
      !this.firstname.invalid &&
      !this.lastname.invalid &&
      !this.phoneNumber.invalid
    ) {
      this.ps.ajouterPersonne(this.reactiveFormTopersonne());
      this.resetForm();
    }
  }

  reactiveFormTopersonne(): Personne {
    return {
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      phoneNumber: this.phoneNumber.value,
    } as Personne;
  }

  resetForm(): void {
    this.firstname.reset();
    this.lastname.reset();
    this.phoneNumber.reset();
  }

  formValueToPersonne(formValue: any): Personne {
    return {
      firstname: formValue.firstname.toLowerCase(),
      lastname: formValue.lastname.toUpperCase(),
      phoneNumber: formValue.phoneNumber,
    } as Personne;
  }
}
