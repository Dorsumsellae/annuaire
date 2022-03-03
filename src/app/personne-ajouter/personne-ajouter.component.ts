import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personne } from '../models/personne';
import { PersonneServiceService } from '../services/personne-service.service';

@Component({
  selector: 'app-personne-ajouter',
  templateUrl: './personne-ajouter.component.html',
  styleUrls: ['./personne-ajouter.component.scss'],
})
export class PersonneAjouterComponent implements OnInit {
  constructor(private ps: PersonneServiceService) {}

  ngOnInit(): void {}

  public traiterFormulaire(form: NgForm) {
    console.log(form.value);
    //ajouter la personne à la liste
    if (!form.invalid) {
      this.ps
        .ajouterPersonne(this.formValueToPersonne(form.value))
        .subscribe((res) => {
          console.log(res);
        });
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
