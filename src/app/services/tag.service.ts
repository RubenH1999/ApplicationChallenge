import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>("https://localhost:44383/api/tag");
  }
}
