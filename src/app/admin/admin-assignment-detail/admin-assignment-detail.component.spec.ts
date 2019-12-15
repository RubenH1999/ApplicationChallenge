import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssignmentDetailComponent } from './admin-assignment-detail.component';

describe('AdminAssignmentDetailComponent', () => {
  let component: AdminAssignmentDetailComponent;
  let fixture: ComponentFixture<AdminAssignmentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssignmentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssignmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
