import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesJugador } from './detalles-jugador';

describe('DetallesJugador', () => {
  let component: DetallesJugador;
  let fixture: ComponentFixture<DetallesJugador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesJugador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesJugador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
