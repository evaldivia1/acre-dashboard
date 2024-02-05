import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartInsTotalComponent } from './chart-ins-total.component';

describe('ChartInsTotalComponent', () => {
  let component: ChartInsTotalComponent;
  let fixture: ComponentFixture<ChartInsTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartInsTotalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartInsTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
