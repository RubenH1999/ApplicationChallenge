import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerToevoegenComponent } from './maker-toevoegen.component';

describe('MakerToevoegenComponent', () => {
  let component: MakerToevoegenComponent;
  let fixture: ComponentFixture<MakerToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
