import { Component, inject, signal } from '@angular/core';
import { InscripcioChartService } from 'app/inscripcions/services/inscripcio-chart.service';
import { InscripcionsUcsFP } from 'app/models/InscripcionsUcsFP.model';
import { getBorderColor } from 'app/utils/Utils';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-chart-ins-ucs-fp',
  standalone: true,
  imports: [],
  templateUrl: './chart-ins-ucs-fp.component.html',
  styleUrl: './chart-ins-ucs-fp.component.css'
})
export class ChartInsUcsFpComponent {
  private insService = inject(InscripcioChartService);
  public inscripcions = signal<Array<InscripcionsUcsFP>>([]);
  public chart: Chart | undefined;

  ngOnInit(): void {
    // datos
    this.insService.getNumInscripcionsUcsByFP(2023).subscribe((data) => {
      this.inscripcions.set(data);
      this.renderChart(data);
    });
  }

  renderChart(dataIns:Array<InscripcionsUcsFP>) {
    // datos
    const data = {
      labels: dataIns.map(e=>e.codiFP),
      datasets: [
        {
          label: 'UCs inscrites',
          data:  dataIns.map(e=>e.numUCs),
          backgroundColor: getBorderColor(dataIns.length),
          hoverOffset: 4,
        },
      ],
    };
    // Creamos la gráfica
    this.chart = new Chart('chartInsUCsFP', {
      type: 'pie' as ChartType, // tipo de la gráfica
      data, // datos
    });
  }
}
