import { Component } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { mesos } from '../../../constants/months.enum';

@Component({
  selector: 'app-chart-ins-qp',
  standalone: true,
  imports: [],
  templateUrl: './chart-ins-qp.component.html',
  styleUrl: './chart-ins-qp.component.css'
})
export class ChartInsQpComponent {

  // Atributo que almacena los datos del chart
  public chart: Chart | undefined;

  ngOnInit(): void {
    // datos

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };
    
    // Creamos la gráfica
    this.chart = new Chart("chart-qp", {
      type: 'bar' as ChartType, // tipo de la gráfica 
      data // datos 
    })

  }
}