import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloCriarComponent } from './modelo-criar.component';

describe('ModeloCriarComponent', () => {
  let component: ModeloCriarComponent;
  let fixture: ComponentFixture<ModeloCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
