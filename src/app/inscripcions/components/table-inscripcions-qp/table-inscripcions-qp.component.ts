import { Component, Input, OnInit } from '@angular/core';
import { QuantityInscripcionsQP } from 'app/models/QuantityInscripcionsQP.model';

@Component({
  selector: 'app-table-inscripcions-qp',
  standalone: true,
  imports: [],
  templateUrl: './table-inscripcions-qp.component.html',
  styleUrl: './table-inscripcions-qp.component.css'
})
export class TableInscripcionsQpComponent {
  @Input() llistaQuantityInsQP:QuantityInscripcionsQP[]=[];

  ngOnInit():void{

  }
}
