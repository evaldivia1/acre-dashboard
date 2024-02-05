import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { FP_LIST } from '@constants/constants';
import { QuantityHabilitatsFP } from 'app/models/QuantityHabilitatsFP.model';
import { HabilitatService } from 'app/habilitats/services/habilitat.service';

@Component({
  selector: 'app-chart-hab-fp',
  standalone: true,
  imports: [],
  templateUrl: './chart-hab-fp.component.html',
  styleUrl: './chart-hab-fp.component.css',
})
export class ChartHabFpComponent implements OnInit{

  private habService = inject(HabilitatService);
  public llistaQuantityHabFP = signal<QuantityHabilitatsFP[]>([]);

  /*
  @Input() llista:Array<QuantityHabilitatsFP>=[
    { "fp": "AFD", "quantity": 17 },
    { "fp": "ADG", "quantity": 62 }];*/
  
  // Atributo que almacena los datos del chart
  public chart: Chart | undefined;


  private getBackgroundColor(length: number):Array<string> {
    const bg = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)',
    ];
    let aColors: string[] = [];
    for (let i = 0; i < length; i++) {
      aColors.push(bg[i % 7]);
    }
    return aColors;
  }

  private getBorderColor(length: number):Array<string> {
    const bg = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
    ];
    let aColors: string[] = [];
    for (let i = 0; i < length; i++) {
      aColors.push(bg[i % 7]);
    }
    return aColors;
  }

  ngOnInit(): void {
    this.habService.getNumHabilitatsFP().subscribe( data => {
      console.log(data)
      this.llistaQuantityHabFP.set(data);
      this.renderChart(data);
    });
  }

  renderChart(llistaData:Array<QuantityHabilitatsFP>):void{
     
    // datos
    const quantityByFP:Array<number> = llistaData.map((e:QuantityHabilitatsFP)=>e.numHabilitats);
    const llistaFP:Array<string>= llistaData.map((e:QuantityHabilitatsFP)=>e.fp);
 
    console.log(quantityByFP)
    const data = {
      labels: llistaFP,
      datasets: [
        {
          label: 'Habilitas interessats',
          data: quantityByFP,
          backgroundColor: this.getBackgroundColor(llistaFP.length),
          borderColor: this.getBorderColor(llistaFP.length),
          borderWidth: 1,
        },
      ],
    };

    // Creamos la gráfica
    this.chart = new Chart('chart-qp', {
      type: 'bar' as ChartType, // tipo de la gráfica
      data,
      options: {
        responsive: true,
      },
    });
  }
}
