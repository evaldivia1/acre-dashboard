import { Component, Input, inject, signal } from '@angular/core';
// Necesitamos importar Chart desde chart.js/auto
import { Chart, ChartType } from 'chart.js/auto';
import { mesos } from '../../../constants/months.enum';
import { InscripcionsMes } from 'app/models/InscripcionsMes.model';
import { InscripcioChartService } from 'app/inscripcions/services/inscripcio-chart.service';


@Component({
  selector: 'app-chart-ins-mes',
  standalone: true,
  imports: [],
  templateUrl: './chart-ins-mes.component.html',
  styleUrl: './chart-ins-mes.component.css'
})
export class ChartInsMesComponent {
  /* @Input() 
  llistaInscripcionsMes:InscripcionsMes[]=[];*/

  private insService = inject(InscripcioChartService);
  public llistaInscripcionsMes = signal<InscripcionsMes[]>([]);
  public chart: Chart | undefined;


  ngOnInit(): void {
    this.insService.getNumInscripcionsMes(2023).subscribe((data) => {
      this.llistaInscripcionsMes.set(data);
      this.renderChart(data);
    });
  }

  renderChart(llistaInscripcionsMes:Array<InscripcionsMes>){
      // datos
      const data = {
        labels: mesos,
        datasets: [{
          label: 'Inscripcions per mes',
          data: (llistaInscripcionsMes.map(item=>item.numInscripcions)),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };
  
      // Creamos la gráfica
      this.chart = new Chart("chart", {
        type: 'line' as ChartType, // tipo de la gráfica 
        data // datos 
      })
  }
}
