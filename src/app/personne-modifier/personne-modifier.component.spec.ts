import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneModifierComponent } from './personne-modifier.component';

describe('PersonneModifierComponent', () => {
  let component: PersonneModifierComponent;
  let fixture: ComponentFixture<PersonneModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
