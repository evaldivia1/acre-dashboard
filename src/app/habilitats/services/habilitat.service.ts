import { Injectable, inject } from '@angular/core';
import * as jsonData from '../../../data/habilitats.json';
import { Observable, map, of } from 'rxjs';
import { Habilitat } from '../../models/Habilitat.model';
import { QuantityHabilitatsFP } from 'app/models/QuantityHabilitatsFP.model';
import { QuantityHabilitatsQP } from 'app/models/QuantityHabilitatsQP.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HabilitatService {
  http = inject(HttpClient);

  constructor() {}

  getHabilitats(): Observable<Array<Habilitat>> {
    //this.httpClient.get(this.URL).subscribe(console.log);
    return of(jsonData.result);
  }

  getNumHabilitatsFP(): Observable<Array<QuantityHabilitatsFP>> {
    return this.http.get<Array<QuantityHabilitatsFP>>(
      '/assets/habilitats_fp.json'
    );
  }

  getNumHabilitatsQP(): Observable<Array<QuantityHabilitatsQP>> {
    return this.http.get<Array<QuantityHabilitatsQP>>(
      '/assets/habilitats_qp.json'
    );
  }

  getNumHabilitatsQqByFP(
    codiFP: string
  ): Observable<Array<QuantityHabilitatsQP>> {
    console.log('getNumHabilitatsQqByFP', codiFP);
    return this.http
      .get<Array<QuantityHabilitatsQP>>('/assets/habilitats_qp.json')
      .pipe(
        map((list) => {
          if (codiFP === '') return list;
          return list.filter((item: QuantityHabilitatsQP) =>
            item.qp.includes(codiFP)
          );
        })
      );
  }
}
