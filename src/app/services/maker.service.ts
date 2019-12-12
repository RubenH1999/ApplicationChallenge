import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Maker } from '../models/maker.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MakerService {
 

    constructor(private http: HttpClient) { }
  
    
    getMakers(): Observable<Maker[]> 
    {
      return this.http.get<Maker[]>("https://localhost:44383/api/Maker");
    
    }
  
    addMaker(maker: Maker) {
     
      return this.http.post<Maker>("https://localhost:44383/api/Maker/", maker);
      }
  
  
    }

