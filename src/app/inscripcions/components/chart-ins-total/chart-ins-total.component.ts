import { Component } from '@angular/core';
import Chart, { ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-chart-ins-total',
  standalone: true,
  imports: [],
  templateUrl: './chart-ins-total.component.html',
  styleUrl: './chart-ins-total.component.css'
})
export class ChartInsTotalComponent {

  // Atributo que almacena los datos del chart
  public chart: Chart | undefined;

  ngOnInit(): void {

    // datos
    const data = {
      labels: [
        'Pendents',
        'Acceptades',
        'Denegades'
      ],
      datasets: [{
        label: 'Inscripcions 2023',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
    // Creamos la gráfica
    this.chart = new Chart("chartTotal", {
      type: 'pie' as ChartType, // tipo de la gráfica 
      data // datos 
    })

  }

}
