import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  // get reviews die gemaakt zijn door gebruiker
  getReviewsWhereVerzenderID(gebruikerID: number): Observable<Review[]> {
    return this.http.get<Review[]>('https://localhost:44383/api/Review/GetReviewsWhereVerzenderId/' + gebruikerID);
  }
  // get reviews die gemaakt zijn voor gebruiker
  getReviewsWhereOntvangerID(gebruikerID: number): Observable<Review[]> {
    return this.http.get<Review[]>('https://localhost:44383/api/Review/GetReviewsWhereOntvangerId/' + gebruikerID);
  }

  addReview(review: Review) {
    return this.http.post<Review>('https://localhost:44383/api/review', review);
  }

  updateReview(reviewID: number, review: Review) {
    return this.http.put<Review>('https://localhost:44383/api/review/' + reviewID, review);
  }
}
