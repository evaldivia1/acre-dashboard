import { Component, OnInit, inject, signal } from '@angular/core';
import { ChartHabFpComponent } from '../components/chart-hab-fp/chart-hab-fp.component';
import { HabilitatService } from '../services/habilitat.service';
import { CommonModule, NgFor } from '@angular/common';
import { Habilitat } from '../../models/Habilitat.model';
import { QuantityHabilitatsFP } from 'app/models/QuantityHabilitatsFP.model';
import { TableHabilitatsQpComponent } from '../components/table-habilitats-qp/table-habilitats-qp.component';
import { QuantityHabilitatsQP } from 'app/models/QuantityHabilitatsQP.model';
import { FP_LIST } from 'app/constants/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-habilitats-page',
  standalone: true,
  imports: [ChartHabFpComponent, CommonModule, TableHabilitatsQpComponent],
  templateUrl: './habilitats.page.component.html',
  styleUrl: './habilitats.page.component.css',
})
export class HabilitatsPageComponent implements OnInit {
  private habService = inject(HabilitatService);
  public habilitats = signal<Habilitat[]>([]);
  public llistaQuantityHabFP = signal<QuantityHabilitatsFP[]>([]);
  public llistaQuantityHabQP = signal<QuantityHabilitatsQP[]>([]);
  public llistaFP = FP_LIST;

  public filtreForm: FormGroup = this.fb.group({
    formProfessional: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.habService.getHabilitats().subscribe((data) => {
      this.habilitats.set(data);
    });

    this.habService.getNumHabilitatsFP().subscribe((data) => {
      console.log(data);
      this.llistaQuantityHabFP.set(data);
    });

    this.habService.getNumHabilitatsQP().subscribe((data) => {
      this.llistaQuantityHabQP.set(data);
    });
  }

  // Quan es selecciona altra familia professional
  onChangeFP(event: any): void {
    const value = event.target.value;
    // Acceder al valor seleccionado
    console.log(value);
    this.habService.getNumHabilitatsQqByFP(value).subscribe((e) => {
      this.llistaQuantityHabQP.set(e);
    });

    /*
    this.filtreForm.get('formProfessional')!.valueChanges
    .subscribe( (value: string) => {
      console.log("hola", value)
      this.habService.getNumHabilitatsQqByFP(value).subscribe(e=>{
        alert(3)
        console.log(e);
        this.llistaQuantityHabQP.set(e)
      })
    });
    */
  }
}
