import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http: HttpClient) { }

  getAssignment(assignmentID: number): Observable<Assignment> {
    return this.http.get<Assignment>("https://localhost:44383/api/assignment/" + assignmentID);
  }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>("https://localhost:44383/api/assignment");
  }

  getAssignmentsWhereGebruikerID(gebruikerID: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>("https://localhost:44383/api/assignment/account/" + gebruikerID);
  }
}
