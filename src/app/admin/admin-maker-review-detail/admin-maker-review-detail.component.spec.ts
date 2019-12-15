import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMakerReviewDetailComponent } from './admin-maker-review-detail.component';

describe('AdminMakerReviewDetailComponent', () => {
  let component: AdminMakerReviewDetailComponent;
  let fixture: ComponentFixture<AdminMakerReviewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMakerReviewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMakerReviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
