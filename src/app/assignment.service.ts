import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Assignment } from './models/assignment.model';
import { Observable } from 'rxjs';
import { Bedrijf } from './models/bedrijf.model';
import { Review } from './models/review.model';
import { Tag } from './models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http: HttpClient) { }

  getAssignment(assignmentID: number): Observable<Assignment> {
    return this.http.get<Assignment>("https://localhost:44383/api/assignment/" + assignmentID);
  }

  getBedrijf(bedrijfID: number): Observable<Bedrijf> {
    return this.http.get<Bedrijf>("https://localhost:44383/api/bedrijf/" + bedrijfID);
  }

  getAssignmentsWithTags(tags: string[]): Observable<Assignment[]> {
    return this.http.get<Assignment[]>("" + tags);
  }

  getBedrijvenWithTags(tags: string[]): Observable<Bedrijf[]> {
    return this.http.get<Bedrijf[]>("" + tags);
  }

  getAssignmentsWhereGebruikerID(gebruikerID: number): Observable<Assignment[]> {
    return this.http.get<Assignment[]>("https://localhost:44383/api/assignment/account/" + gebruikerID);
  }

  getReviewsWhereGebruikerID(gebruikerID: number): Observable<Review[]> {
    return this.http.get<Review[]>("https://localhost:44383/api/review/account/" + gebruikerID);
  }

  addReview(review: Review) {
    return this.http.post<Review>("https://localhost:44383/api/review", review);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>("https://localhost:44383/api/tag");
  }
}
