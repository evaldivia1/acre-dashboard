import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { InscripcionsAnual } from 'app/models/InscripcionsAnual.model';
import { InscripcionsMes } from 'app/models/InscripcionsMes.model';
import { InscripcionsUcsFP } from 'app/models/InscripcionsUcsFP.model';
import { QuantityInscripcionsQP } from 'app/models/QuantityInscripcionsQP.model';
import { Observable, map } from 'rxjs';

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

  getNumInscripcionsQP(year:number):Observable<Array<QuantityInscripcionsQP>>{
    return this.http.get<Array<QuantityInscripcionsQP>>(`/assets/inscripcions_qp_${year}.json`);
  }

  getNumInscripcionsUcsByFP(year:number):Observable<Array<InscripcionsUcsFP>>{
    return this.http.get<Array<InscripcionsUcsFP>>(`/assets/inscripcions_ucs_fp_${year}.json`);
  }

  getNumInscripcionsQpByFP(year:number, codiFP:string): Observable<Array<QuantityInscripcionsQP>> {
    console.log('getNumHabilitatsQqByFP', codiFP);
    return this.http
      .get<Array<QuantityInscripcionsQP>>(`/assets/inscripcions_qp_${year}.json`)
      .pipe(
        map((list) => {
          if (codiFP === '') return list;
          return list.filter((item: QuantityInscripcionsQP) =>
            item.codiQP.includes(codiFP)
          );
        })
      );
  }

  

}
