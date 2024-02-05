import { Component, OnInit, inject, signal } from '@angular/core';
import { ChartInsMesComponent } from '../components/chart-ins-mes/chart-ins-mes.component';
import { ChartInsTotalComponent } from '../components/chart-ins-total/chart-ins-total.component';
import { ChartInsQpComponent } from '../components/chart-ins-qp/chart-ins-qp.component';
import { InscripcioChartService } from '../services/inscripcio-chart.service';
import { InscripcionsMes } from 'app/models/InscripcionsMes.model';

@Component({
  selector: 'app-inscripcions-page',
  standalone: true,
  imports: [ChartInsMesComponent, ChartInsTotalComponent, ChartInsQpComponent],
  templateUrl: './inscripcions.page.component.html',
  styleUrl: './inscripcions.page.component.css'
})
export class InscripcionsPageComponent implements OnInit{
  private insService = inject(InscripcioChartService);
  public llistaInscripcionsMes = signal<InscripcionsMes[]>([]);

  ngOnInit(): void {
    this.insService.getNumInscripcionsMes(2023).subscribe((data) => {
      this.llistaInscripcionsMes.set(data);
    });
  }
}
