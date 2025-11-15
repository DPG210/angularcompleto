import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosToken } from './empleados-token';

describe('EmpleadosToken', () => {
  let component: EmpleadosToken;
  let fixture: ComponentFixture<EmpleadosToken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosToken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosToken);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
