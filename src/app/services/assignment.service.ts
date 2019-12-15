import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Assignment} from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http: HttpClient) {
  }

  getAssignment(assignmentID: number): Observable<Assignment> {
    return this.http.get<Assignment>('https://localhost:44383/api/assignment/' + assignmentID);
  }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>('https://localhost:44383/api/assignment');
  }

  getAssignmentsByBedrijf(bedrijfID: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>('https://localhost:44383/api/assignment/getAssignmentsByBedrijf/' + bedrijfID);
  }

  getAssignmentsWhereGebruikerID(gebruikerID: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>('https://localhost:44383/api/assignment/account/' + gebruikerID);
  }

  addAssignment(assignment: Assignment) {
    return this.http.post<Assignment>('https://localhost:44383/api/assignment', assignment);
  }

  addMakerToAssignment(assignmentID, assignment){
    return this.http.put('https://localhost:44383/api/assignment/' + assignmentID, assignment);
  }

  deleteAssignment(assignmentID: number) {
    return this.http.delete('https://localhost:44383/api/assignment/' + assignmentID);
  }
  updateAssignment(assignmentID: number, assignment: Assignment) {
    return this.http.put<Assignment>('https://localhost:44383/api/assignment/' + assignmentID, assignment);
  }

}
