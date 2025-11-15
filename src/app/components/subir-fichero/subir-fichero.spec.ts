import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirFichero } from './subir-fichero';

describe('SubirFichero', () => {
  let component: SubirFichero;
  let fixture: ComponentFixture<SubirFichero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirFichero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirFichero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
