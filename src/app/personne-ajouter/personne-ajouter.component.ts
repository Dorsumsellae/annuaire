import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Personne } from '../personne';

@Component({
  selector: 'app-personne-ajouter',
  templateUrl: './personne-ajouter.component.html',
  styleUrls: ['./personne-ajouter.component.scss'],
})
export class PersonneAjouterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      phoneNumber: new FormControl(),
    });
  }

  public save() {
    let registerPeople = new Personne(
      0,
      this.registerForm.value.firstname,
      this.registerForm.value.lastname,
      this.registerForm.value.phoneNumber
    );
    console.log('Données du formulaire ...', registerPeople);
  }
}
