import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TagMaker } from '../models/tag-maker.model';

@Injectable({
  providedIn: 'root'
})
export class TagmakerService {

  constructor(private http: HttpClient) { }

  getTagMakersWhereGebruikerID(gebruikerID: number): Observable<TagMaker[]> {
    return this.http.get<TagMaker[]>("https://localhost:44383/api/tagmaker/accountID/" + gebruikerID);
  }

  addTagMaker(tagMaker: TagMaker) {
    return this.http.post<TagMaker>('https://localhost:44383/api/tagmaker', tagMaker);
  }

  deleteTagMakerWhereMakerID(makerID: number) {
    return this.http.delete<TagMaker>("https://localhost:44383/api/tagmaker/makerid/" + makerID);
  } 
}
