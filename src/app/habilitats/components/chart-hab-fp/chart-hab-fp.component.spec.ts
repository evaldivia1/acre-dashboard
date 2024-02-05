import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartHabFpComponent } from './chart-hab-fp.component';

describe('ChartHabFpComponent', () => {
  let component: ChartHabFpComponent;
  let fixture: ComponentFixture<ChartHabFpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartHabFpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartHabFpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
