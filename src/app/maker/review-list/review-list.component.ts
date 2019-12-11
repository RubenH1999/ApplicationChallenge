import {Component, OnInit} from '@angular/core';
import {Review} from 'src/app/models/review.model';
import {ReviewService} from 'src/app/services/review.service';


@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  reviews: Review[];
  messageReview: boolean = false;

  constructor(private _reviewService: ReviewService) {
  }

  ngOnInit() {
    this._reviewService.getReviewsWhereGebruikerID(Number(localStorage.getItem('gebruikerId'))).subscribe(
      result => {
        this.reviews = result;
      },
      (err) => {
        this.messageReview = true;
      }
    );
  }

}
