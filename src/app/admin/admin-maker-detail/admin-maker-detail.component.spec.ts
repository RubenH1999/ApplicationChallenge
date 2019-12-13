import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMakerDetailComponent } from './admin-maker-detail.component';

describe('AdminMakerDetailComponent', () => {
  let component: AdminMakerDetailComponent;
  let fixture: ComponentFixture<AdminMakerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMakerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMakerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
