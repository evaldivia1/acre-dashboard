import { Component, Input, OnInit } from '@angular/core';
import { QuantityHabilitatsQP } from 'app/models/QuantityHabilitatsQP.model';

@Component({
  selector: 'app-table-habilitats-qp',
  standalone: true,
  imports: [],
  templateUrl: './table-habilitats-qp.component.html',
  styleUrl: './table-habilitats-qp.component.css'
})
export class TableHabilitatsQpComponent implements OnInit {
  @Input() llistaQuantityHabQP:QuantityHabilitatsQP[]=[];

  ngOnInit():void{

  }
}
