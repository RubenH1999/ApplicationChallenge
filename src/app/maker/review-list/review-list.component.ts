import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { AssignmentService } from 'src/app/assignment.service';
import { Gebruiker } from 'src/app/models/gebruiker.model';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  reviews: Review[];
  messageReview: boolean = false;

  constructor(private _assignmentService: AssignmentService) { }

  ngOnInit() {
    this._assignmentService.getReviewsWhereGebruikerID(Number(localStorage.getItem("gebruikerId"))).subscribe(
      result => {  
        this.reviews = result; 
        if (this.reviews.length == 0) {
          this.messageReview = true;
        }  
      }
    );
  }

}
