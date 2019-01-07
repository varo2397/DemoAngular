import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AleatoriaComponent } from './aleatoria.component';

describe('AleatoriaComponent', () => {
  let component: AleatoriaComponent;
  let fixture: ComponentFixture<AleatoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AleatoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AleatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
