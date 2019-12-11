import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bedrijf } from '../models/bedrijf.model';


@Injectable({
  providedIn: 'root'
})
export class BedrijfService {

  constructor(private http: HttpClient) { }

  getBedrijvenMetGebruiker(): Observable<Bedrijf[]> {
    return this.http.get<Bedrijf[]>('https://localhost:44383/api/Bedrijf/getBedrijvenMetGebruiker');
  }
  getBedrijf(bedrijfID: number): Observable<Bedrijf> {
    return this.http.get<Bedrijf>("https://localhost:44383/api/bedrijf/" + bedrijfID);
  }


  getBedrijven(): Observable<Bedrijf[]> {
    return this.http.get<Bedrijf[]>("https://localhost:44383/api/bedrijf");
  }
}
