import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartInsQpComponent } from './chart-ins-qp.component';

describe('ChartInsQpComponent', () => {
  let component: ChartInsQpComponent;
  let fixture: ComponentFixture<ChartInsQpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartInsQpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartInsQpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
