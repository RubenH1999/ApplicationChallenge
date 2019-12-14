import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {Maker} from '../models/maker.model';
import {HttpClient} from '@angular/common/http';
import {Bedrijf} from '../models/bedrijf.model';

@Injectable({
  providedIn: 'root'
})
export class MakerService {


  constructor(private http: HttpClient) {
  }


  getMakers(): Observable<Maker[]> {
    return this.http.get<Maker[]>('https://localhost:44383/api/Maker');
  }

  getMaker(makerID: number): Observable<Maker> {
    return this.http.get<Maker>('https://localhost:44383/api/Maker/' + makerID);
  }

  getMakersMetGebruiker(): Observable<Maker[]> {
    return this.http.get<Maker[]>('https://localhost:44383/api/Maker/getMakersMetGebruiker');
  }

  addMaker(maker: Maker) {

    return this.http.post<Maker>('https://localhost:44383/api/Maker/', maker);
  }

  getMakerByID(id){
    return this.http.get<Maker>("https://localhost:44383/api/Maker/getMakerByAccountID/" + id);
  }
  updateMaker(maker){
    return this.http.put("https://localhost:44383/api/maker/" + maker.makerID, maker).subscribe();
  }
  deleteMaker(makerID: number) {
    return this.http.delete("https://localhost:44383/api/maker/" + makerID);
  }
  
  updateMakerAdmin(makerID:number, maker:Maker){
    return this.http.put("https://localhost:44383/api/maker/" + maker.makerID, maker).subscribe();
  }
  


}

