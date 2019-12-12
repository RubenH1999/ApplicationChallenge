import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedrijfHomeComponent } from './bedrijf-home.component';

describe('BedrijfHomeComponent', () => {
  let component: BedrijfHomeComponent;
  let fixture: ComponentFixture<BedrijfHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedrijfHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedrijfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
