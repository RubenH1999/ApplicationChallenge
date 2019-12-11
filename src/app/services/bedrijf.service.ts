import { Injectable } from '@angular/core';
import {Gebruiker} from '../models/gebruiker.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Bedrijf} from '../models/bedrijf.model';

@Injectable({
  providedIn: 'root'
})
export class BedrijfService {

  constructor(private http: HttpClient) { }

  getBedrijvenMetGebruiker(): Observable<Bedrijf[]> {
    return this.http.get<Bedrijf[]>('https://localhost:44383/api/Bedrijf/getBedrijvenMetGebruiker');
  }
}
