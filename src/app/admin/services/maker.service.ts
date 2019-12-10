import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maker } from 'src/app/models/maker.model';

@Injectable({
  providedIn: 'root'
})
export class MakerService {

  constructor(private http: HttpClient) { }

/*  getMakers(): Observable<Maker[]> {
    return this.http.get<Maker[]>("https://localhost:44383/api/Bedrijfs/");
  }
  */
  
}
