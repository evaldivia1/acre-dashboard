import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHabilitatsQpComponent } from './table-habilitats-qp.component';

describe('TableHabilitatsQpComponent', () => {
  let component: TableHabilitatsQpComponent;
  let fixture: ComponentFixture<TableHabilitatsQpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableHabilitatsQpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableHabilitatsQpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
