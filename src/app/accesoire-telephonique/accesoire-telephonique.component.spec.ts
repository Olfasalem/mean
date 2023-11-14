import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoireTelephoniqueComponent } from './accesoire-telephonique.component';

describe('AccesoireTelephoniqueComponent', () => {
  let component: AccesoireTelephoniqueComponent;
  let fixture: ComponentFixture<AccesoireTelephoniqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesoireTelephoniqueComponent]
    });
    fixture = TestBed.createComponent(AccesoireTelephoniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
