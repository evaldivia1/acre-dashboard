import { TestBed } from '@angular/core/testing';

import { InscripcioChartService } from './inscripcio-chart.service';

describe('InscripcioChartService', () => {
  let service: InscripcioChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscripcioChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
