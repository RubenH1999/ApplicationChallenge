import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMakerReviewComponent } from './admin-maker-review.component';

describe('AdminMakerReviewComponent', () => {
  let component: AdminMakerReviewComponent;
  let fixture: ComponentFixture<AdminMakerReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMakerReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMakerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
