import { Injectable } from '@angular/core';

import { Bedrijf } from '../models/bedrijf.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BedrijfService {

  constructor(private http: HttpClient) { }

  addBedrijf(bedrijf: Bedrijf) {
   
    return this.http.post<Bedrijf>("https://localhost:44383/api/bedrijf", bedrijf);
    }
    getBedrijf(bedrijfID: number): Observable<Bedrijf> {
      return this.http.get<Bedrijf>("https://localhost:44383/api/bedrijf/" + bedrijfID);
    }

  getBedrijven(): Observable<Bedrijf[]> {
    return this.http.get<Bedrijf[]>("https://localhost:44383/api/Bedrijf");
  }

}
