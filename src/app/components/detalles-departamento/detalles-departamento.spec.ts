import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDepartamento } from './detalles-departamento';

describe('DetallesDepartamento', () => {
  let component: DetallesDepartamento;
  let fixture: ComponentFixture<DetallesDepartamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesDepartamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesDepartamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
