import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixinhaEdicaoComponent } from './caixinha-edicao.component';

describe('CaixinhaEdicaoComponent', () => {
  let component: CaixinhaEdicaoComponent;
  let fixture: ComponentFixture<CaixinhaEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixinhaEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixinhaEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
