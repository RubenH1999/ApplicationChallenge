import { Injectable } from '@angular/core';
import { TagAssignment } from '../models/tag-assignment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagassignmentService {

  constructor(private http: HttpClient) { }

  getTagAssignmentsWhereAssignmentID(assignmentID: number): Observable<TagAssignment[]> {
    return this.http.get<TagAssignment[]>("https://localhost:44383/api/tagassignment/assignmentID/" + assignmentID);
  }

  addTagAssignment(tagAssignment: TagAssignment) {
    return this.http.post<TagAssignment>('https://localhost:44383/api/tagassignment', tagAssignment);
  }
}
