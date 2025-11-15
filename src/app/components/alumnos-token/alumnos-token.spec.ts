import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosToken } from './alumnos-token';

describe('AlumnosToken', () => {
  let component: AlumnosToken;
  let fixture: ComponentFixture<AlumnosToken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosToken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosToken);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
