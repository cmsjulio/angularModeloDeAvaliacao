import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPeriodoPorIdDoModeloComponent } from './listar-periodo-por-id-do-modelo.component';

describe('ListarPeriodoPorIdDoModeloComponent', () => {
  let component: ListarPeriodoPorIdDoModeloComponent;
  let fixture: ComponentFixture<ListarPeriodoPorIdDoModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPeriodoPorIdDoModeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPeriodoPorIdDoModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
