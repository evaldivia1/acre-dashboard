import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartInsMesComponent } from './chart-ins-mes.component';

describe('ChartInsMesComponent', () => {
  let component: ChartInsMesComponent;
  let fixture: ComponentFixture<ChartInsMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartInsMesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartInsMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
