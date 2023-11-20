import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialClinicaComponent } from './historial-clinica.component';

describe('HistorialClinicaComponent', () => {
  let component: HistorialClinicaComponent;
  let fixture: ComponentFixture<HistorialClinicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialClinicaComponent]
    });
    fixture = TestBed.createComponent(HistorialClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
