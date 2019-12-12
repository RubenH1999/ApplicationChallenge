import { Component, OnInit } from '@angular/core';
import {Review} from '../../models/review.model';
import {ReviewService} from '../../services/review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  geschrevenReviews: Review[];
  ontvangenReviews: Review[];
  geschrevenMSG: boolean = false;
  verzondenMSG: boolean = false;

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getReviewsWhereVerzenderID(4).subscribe(
      result => {
        this.geschrevenReviews = result;
        console.log(result);
        if (result.length === 0) {
          this.geschrevenMSG = true;
        }
      });

    this.reviewService.getReviewsWhereOntvangerID(4).subscribe(result => {
      this.ontvangenReviews = result;
      console.log(result);
      if (result.length === 0) {
        this.verzondenMSG = true;
      }
    });
  }

}
