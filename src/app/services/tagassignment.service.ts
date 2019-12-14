import { Injectable } from '@angular/core';
import { TagAssignment } from '../models/tag-assignment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagassignmentService {

  constructor(private http: HttpClient) { }

  addTagAssignment(tagAssignment: TagAssignment) {
    return this.http.post<TagAssignment>('https://localhost:44383/api/tagassignment', tagAssignment);
  }
}
