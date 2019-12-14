import {Injectable} from '@angular/core';

import {Bedrijf} from '../models/bedrijf.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BedrijfService {

  constructor(private http: HttpClient) {
  }

  getBedrijvenMetGebruiker(): Observable<Bedrijf[]> {
    return this.http.get<Bedrijf[]>('https://localhost:44383/api/Bedrijf/getBedrijvenMetGebruiker');
  }

  getBedrijf(bedrijfID: number): Observable<Bedrijf> {
    return this.http.get<Bedrijf>('https://localhost:44383/api/bedrijf/' + bedrijfID);
  }

  getBedrijfByAccountID(accountID: number) {
    return this.http.get<Bedrijf>('https://localhost:44383/api/bedrijf/getBedrijfByAccountID/' + accountID);
  }
  updateBedrijf(bedrijfID: number, bedrijf: Bedrijf) {
    return this.http.put<Bedrijf>('https://localhost:44383/api/Bedrijf/' + bedrijfID, bedrijf);
  }
  addBedrijf(bedrijf: Bedrijf) {

    return this.http.post<Bedrijf>('https://localhost:44383/api/bedrijf', bedrijf);
  }

  getBedrijven(): Observable<Bedrijf[]> {
    return this.http.get<Bedrijf[]>('https://localhost:44383/api/Bedrijf');
  }

  deleteBedrijf(bedrijfID: number) {
    return this.http.delete('https://localhost:44383/api/Bedrijf/' + bedrijfID);
  }
}
