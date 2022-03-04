import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloTreeTableComponent } from './modelo-tree-table.component';

describe('ModeloTreeTableComponent', () => {
  let component: ModeloTreeTableComponent;
  let fixture: ComponentFixture<ModeloTreeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloTreeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloTreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
