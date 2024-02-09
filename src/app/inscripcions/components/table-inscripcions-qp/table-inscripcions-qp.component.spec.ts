import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInscripcionsQpComponent } from './table-inscripcions-qp.component';

describe('TableInscripcionsQpComponent', () => {
  let component: TableInscripcionsQpComponent;
  let fixture: ComponentFixture<TableInscripcionsQpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableInscripcionsQpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableInscripcionsQpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
