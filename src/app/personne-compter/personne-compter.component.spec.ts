import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneCompterComponent } from './personne-compter.component';

describe('PersonneCompterComponent', () => {
  let component: PersonneCompterComponent;
  let fixture: ComponentFixture<PersonneCompterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneCompterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneCompterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
