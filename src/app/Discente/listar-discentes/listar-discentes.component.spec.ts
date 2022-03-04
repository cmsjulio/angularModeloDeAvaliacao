import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDiscentesComponent } from './listar-discentes.component';

describe('ListarDiscentesComponent', () => {
  let component: ListarDiscentesComponent;
  let fixture: ComponentFixture<ListarDiscentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDiscentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDiscentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
