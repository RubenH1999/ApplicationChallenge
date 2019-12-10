import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentOverzichtComponent } from './assignment-overzicht.component';

describe('AssignmentOverzichtComponent', () => {
  let component: AssignmentOverzichtComponent;
  let fixture: ComponentFixture<AssignmentOverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentOverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentOverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
