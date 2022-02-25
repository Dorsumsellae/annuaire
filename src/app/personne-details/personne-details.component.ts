import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.scss'],
})
export class PersonneDetailsComponent implements OnInit {
  @Input()
  personne!: Personne;

  @Input()
  i!: number;

  @Output()
  supressionPersonneEventEmitter = new EventEmitter<Personne>();

  constructor() {}

  ngOnInit(): void {}

  public onClickBoutonSupprimer(personne: Personne): void {
    this.supressionPersonneEventEmitter.emit(personne);
  }
}
