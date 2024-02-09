import { Component, OnInit, inject, signal } from '@angular/core';
import { ChartInsMesComponent } from '../components/chart-ins-mes/chart-ins-mes.component';
import { ChartInsTotalComponent } from '../components/chart-ins-total/chart-ins-total.component';
import { ChartInsQpComponent } from '../components/chart-ins-qp/chart-ins-qp.component';
import { InscripcioChartService } from '../services/inscripcio-chart.service';
import { InscripcionsMes } from 'app/models/InscripcionsMes.model';
import { QuantityInscripcionsQP } from 'app/models/QuantityInscripcionsQP.model';
import { FP_LIST } from '@constants/constants';
import { TableInscripcionsQpComponent } from '../components/table-inscripcions-qp/table-inscripcions-qp.component';
import { ChartInsUcsFpComponent } from '../components/chart-ins-ucs-fp/chart-ins-ucs-fp.component';

@Component({
  selector: 'app-inscripcions-page',
  standalone: true,
  imports: [ChartInsMesComponent, ChartInsTotalComponent, ChartInsQpComponent, TableInscripcionsQpComponent, ChartInsUcsFpComponent],
  templateUrl: './inscripcions.page.component.html',
  styleUrl: './inscripcions.page.component.css'
})
export class InscripcionsPageComponent implements OnInit{
  private insService = inject(InscripcioChartService);
  public llistaInscripcionsMes = signal<InscripcionsMes[]>([]);

  public llistaQuantityInsQP = signal<QuantityInscripcionsQP[]>([]);

  public llistaFP = FP_LIST;

  ngOnInit(): void {
    /*this.insService.getNumInscripcionsMes(2023).subscribe((data) => {
      this.llistaInscripcionsMes.set(data);
    });*/

    this.insService.getNumInscripcionsQP(2023).subscribe((data) => {
      this.llistaQuantityInsQP.set(data);
    });
  }

    // Quan es selecciona altra familia professional
    onChangeFP(event: any): void {
      const value = event.target.value;
      // Acceder al valor seleccionado
      console.log(value);
      this.insService.getNumInscripcionsQpByFP(2023, value).subscribe((e) => {
        this.llistaQuantityInsQP.set(e);
      });

    }
}
