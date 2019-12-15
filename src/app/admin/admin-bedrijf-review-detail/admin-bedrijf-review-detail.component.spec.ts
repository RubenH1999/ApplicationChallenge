import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBedrijfReviewDetailComponent } from './admin-bedrijf-review-detail.component';

describe('AdminBedrijfReviewDetailComponent', () => {
  let component: AdminBedrijfReviewDetailComponent;
  let fixture: ComponentFixture<AdminBedrijfReviewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBedrijfReviewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBedrijfReviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
