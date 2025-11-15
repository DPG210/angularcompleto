import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJugador } from './find-jugador';

describe('FindJugador', () => {
  let component: FindJugador;
  let fixture: ComponentFixture<FindJugador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindJugador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindJugador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
