import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TagBedrijf } from '../models/tag-bedrijf.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagbedrijfService {

  constructor(private http: HttpClient) { }

  getTagBedrijvenWhereGebruikerID(gebruikerID: number): Observable<TagBedrijf[]> {
    return this.http.get<TagBedrijf[]>("https://localhost:44383/api/tagbedrijf/accountID/" + gebruikerID);
  }

  addTagBedrijf(tagBedrijf: TagBedrijf) {
    return this.http.post<TagBedrijf>('https://localhost:44383/api/tagbedrijf', tagBedrijf);
  }

  deleteTagBedrijfWhereBedrijfID(bedrijfID: number) {
    return this.http.delete<TagBedrijf>("https://localhost:44383/api/tagbedrijf/bedrijfid/" + bedrijfID);
  } 
}
