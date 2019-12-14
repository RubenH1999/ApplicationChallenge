import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedrijfAanpassenComponent } from './bedrijf-aanpassen.component';

describe('BedrijfAanpassenComponent', () => {
  let component: BedrijfAanpassenComponent;
  let fixture: ComponentFixture<BedrijfAanpassenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedrijfAanpassenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedrijfAanpassenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
