import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  getReviewsWhereGebruikerID(gebruikerID: number): Observable<Review[]> {
    return this.http.get<Review[]>("https://localhost:44383/api/review/account/" + gebruikerID);
  }

  addReview(review: Review) {
    return this.http.post<Review>("https://localhost:44383/api/review", review);
  }
}
