import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.scss'],
})
export class AproposComponent implements OnInit {
  author: string = 'Nicolas MOUTON--BESSON';
  constructor() {}

  ngOnInit(): void {}
}
