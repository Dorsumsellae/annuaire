import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Personne } from '../models/personne';
import { PersonnePopup } from '../personne-popup/personne-popup.component';

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

  @Input()
  displayContact!: boolean;

  @Output()
  supressionPersonneEventEmitter = new EventEmitter<Personne>();

  @Output()
  updatePersonneEventEmitter = new EventEmitter<Personne>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public onClickBoutonSupprimer(personne: Personne): void {
    this.supressionPersonneEventEmitter.emit(personne);
  }

  openDialog() {
    const dialogRef = this.dialog.open(PersonnePopup, {
      data: this.personne,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.updatePersonneEventEmitter.emit(this.personne);
    });
  }
}
