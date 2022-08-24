import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionesHttpComponent } from './peticiones-http.component';

describe('PeticionesHttpComponent', () => {
  let component: PeticionesHttpComponent;
  let fixture: ComponentFixture<PeticionesHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeticionesHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeticionesHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
