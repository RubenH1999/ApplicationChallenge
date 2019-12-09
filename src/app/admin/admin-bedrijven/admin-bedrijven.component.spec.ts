import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBedrijvenComponent } from './admin-bedrijven.component';

describe('AdminBedrijvenComponent', () => {
  let component: AdminBedrijvenComponent;
  let fixture: ComponentFixture<AdminBedrijvenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBedrijvenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBedrijvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
