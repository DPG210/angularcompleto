import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosHome } from './departamentos-home';

describe('DepartamentosHome', () => {
  let component: DepartamentosHome;
  let fixture: ComponentFixture<DepartamentosHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartamentosHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentosHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
