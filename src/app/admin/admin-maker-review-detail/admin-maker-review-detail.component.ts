import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Review } from 'src/app/models/review.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-admin-maker-review-detail',
  templateUrl: './admin-maker-review-detail.component.html',
  styleUrls: ['./admin-maker-review-detail.component.css']
})
export class AdminMakerReviewDetailComponent implements OnInit {
  id=0
  private routeSub: Subscription;
  review: Review;
  constructor(private route: ActivatedRoute, private router:Router, private _reviewService:ReviewService) { }

  ngOnInit() {
    this.routeSub=this.route.params.subscribe(params=>{
      this.id=params['id']
     
      });
    this._reviewService.getReview(this.id).subscribe(
      result => {  
        this.review = result;  
      }
    );
  }

  onSubmit() {
    this._reviewService.updateReview(this.review.reviewID, this.review).subscribe(result => {
      console.log('update is succes');
      this.router.navigate(['adminMaker']);
    });

  }

  

}
