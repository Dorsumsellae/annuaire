import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnePopupComponent } from './personne-popup.component';

describe('PersonnePopupComponent', () => {
  let component: PersonnePopupComponent;
  let fixture: ComponentFixture<PersonnePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
