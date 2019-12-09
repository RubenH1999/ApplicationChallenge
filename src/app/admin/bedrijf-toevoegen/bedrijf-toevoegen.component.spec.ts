import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedrijfToevoegenComponent } from './bedrijf-toevoegen.component';

describe('BedrijfToevoegenComponent', () => {
  let component: BedrijfToevoegenComponent;
  let fixture: ComponentFixture<BedrijfToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedrijfToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedrijfToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
