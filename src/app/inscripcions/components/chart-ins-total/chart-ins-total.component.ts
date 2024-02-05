import { Component, inject, signal } from '@angular/core';
import { InscripcioChartService } from 'app/inscripcions/services/inscripcio-chart.service';
import { InscripcionsAnual } from 'app/models/InscripcionsAnual.model';
import Chart, { ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-chart-ins-total',
  standalone: true,
  imports: [],
  templateUrl: './chart-ins-total.component.html',
  styleUrl: './chart-ins-total.component.css',
})
export class ChartInsTotalComponent {
  private insService = inject(InscripcioChartService);
  public inscripcionsAnual = signal<InscripcionsAnual>({
    acceptades: 0,
    noAceptades: 0,
    pendents: 0,
  });
  public chart: Chart | undefined;

  ngOnInit(): void {
    // datos
    this.insService.getNumInscripcionsAnual(2023).subscribe((data) => {
      this.inscripcionsAnual.set(data);
      this.renderChart(data);
    });
  }

  renderChart(dataIns:InscripcionsAnual) {
    // datos
    const data = {
      labels: ['Pendents', 'Acceptades', 'Denegades'],
      datasets: [
        {
          label: 'Inscripcions 2023',
          data: [dataIns.pendents, dataIns.acceptades, dataIns.noAceptades],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    };
    // Creamos la gráfica
    this.chart = new Chart('chartTotal', {
      type: 'pie' as ChartType, // tipo de la gráfica
      data, // datos
    });
  }
}
