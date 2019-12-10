import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bedrijf } from 'src/app/models/bedrijf.model';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class BedrijfService {

  constructor(private http: HttpClient) { }

  addBedrijf(bedrijf: Bedrijf) {
   
    return this.http.post<Bedrijf>("https://localhost:44383/api/bedrijf/", bedrijf);
    }

  getBedrijven(): Observable<Bedrijf[]> {
    return this.http.get<Bedrijf[]>("https://localhost:44383/api/Bedrijf");
  }
  
}
