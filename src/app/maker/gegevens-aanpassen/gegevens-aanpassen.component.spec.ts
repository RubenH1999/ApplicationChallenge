import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GegevensAanpassenComponent } from './gegevens-aanpassen.component';

describe('GegevensAanpassenComponent', () => {
  let component: GegevensAanpassenComponent;
  let fixture: ComponentFixture<GegevensAanpassenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GegevensAanpassenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GegevensAanpassenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
