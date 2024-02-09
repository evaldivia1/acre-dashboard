import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartInsUcsFpComponent } from './chart-ins-ucs-fp.component';

describe('ChartInsUcsFpComponent', () => {
  let component: ChartInsUcsFpComponent;
  let fixture: ComponentFixture<ChartInsUcsFpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartInsUcsFpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartInsUcsFpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
