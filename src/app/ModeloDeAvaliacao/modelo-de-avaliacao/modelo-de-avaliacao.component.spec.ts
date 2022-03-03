import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloDeAvaliacaoComponent } from './modelo-de-avaliacao.component';

describe('ModeloDeAvaliacaoComponent', () => {
  let component: ModeloDeAvaliacaoComponent;
  let fixture: ComponentFixture<ModeloDeAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloDeAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloDeAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
