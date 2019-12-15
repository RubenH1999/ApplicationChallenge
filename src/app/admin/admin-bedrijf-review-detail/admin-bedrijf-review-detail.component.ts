import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/services/review.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-bedrijf-review-detail',
  templateUrl: './admin-bedrijf-review-detail.component.html',
  styleUrls: ['./admin-bedrijf-review-detail.component.css']
})
export class AdminBedrijfReviewDetailComponent implements OnInit {
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
      this.router.navigate(['adminBedrijf']);
    });

  }

}
