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
    //ajouter la personne a la base
    this.ps.ajouterPersonne(this.formValueToPersonne(form.value));
  }
  formValueToPersonne(formValue: any): Personne {
    return {
      firstname: formValue.firstname,
      lastname: formValue.lastname,
      phoneNumber: formValue.phoneNumber,
    } as Personne;
  }
}
