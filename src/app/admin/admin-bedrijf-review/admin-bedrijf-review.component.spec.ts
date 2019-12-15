import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBedrijfReviewComponent } from './admin-bedrijf-review.component';

describe('AdminBedrijfReviewComponent', () => {
  let component: AdminBedrijfReviewComponent;
  let fixture: ComponentFixture<AdminBedrijfReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBedrijfReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBedrijfReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
