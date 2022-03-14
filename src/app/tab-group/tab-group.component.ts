import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
})
export class TabGroupComponent implements OnInit {
  public addEvent!: Personne;

  addPersonneEvent(event: Personne) {
    this.addEvent = event;
  }

  constructor() {}

  ngOnInit(): void {}
}
