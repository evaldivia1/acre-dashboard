import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { InscripcionsAnual } from 'app/models/InscripcionsAnual.model';
import { InscripcionsMes } from 'app/models/InscripcionsMes.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcioChartService {
  http=inject(HttpClient);
  
  getNumInscripcionsMes(year:number):Observable<Array<InscripcionsMes>>{
    return this.http.get<Array<InscripcionsMes>>(`/assets/inscripcions_mes_${year}.json`);
  }

  getNumInscripcionsAnual(year:number):Observable<InscripcionsAnual>{
    return this.http.get<InscripcionsAnual>(`/assets/inscripcions_anual_${year}.json`);
  }

}
