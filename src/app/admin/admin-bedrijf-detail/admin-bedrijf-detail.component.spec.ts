import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBedrijfDetailComponent } from './admin-bedrijf-detail.component';

describe('AdminBedrijfDetailComponent', () => {
  let component: AdminBedrijfDetailComponent;
  let fixture: ComponentFixture<AdminBedrijfDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBedrijfDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBedrijfDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
