import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMakerComponent } from './admin-maker.component';

describe('AdminMakerComponent', () => {
  let component: AdminMakerComponent;
  let fixture: ComponentFixture<AdminMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
