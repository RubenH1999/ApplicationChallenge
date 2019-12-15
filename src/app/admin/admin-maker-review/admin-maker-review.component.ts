import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Review } from 'src/app/models/review.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-admin-maker-review',
  templateUrl: './admin-maker-review.component.html',
  styleUrls: ['./admin-maker-review.component.css']
})
export class AdminMakerReviewComponent implements OnInit {

  geschrevenReviews: Review[];
  ontvangenReviews: Review[];
  geschrevenMSG: boolean = false;
  verzondenMSG: boolean = false;
  id=0
  private routeSub: Subscription;
  




  constructor(private route: ActivatedRoute, private router:Router,private reviewService: ReviewService ) { }

  ngOnInit() {
    this.routeSub=this.route.params.subscribe(params=>{
      this.id=params['id']
     
      });
      this.reviewService.getReviewsWhereVerzenderID(this.id).subscribe(
        result => {
          this.geschrevenReviews = result;
          console.log(result);
          if (result.length === 0) {
            this.geschrevenMSG = true;
          }
        });
  
      this.reviewService.getReviewsWhereOntvangerID(this.id).subscribe(result => {
        this.ontvangenReviews = result;
        console.log(result);
        if (result.length === 0) {
          this.verzondenMSG = true;
        }
      });
  }

  deleteReview(id: number) {
    this.reviewService.deleteReview(id).subscribe( result => {

      this.ngOnInit();
    })
  }

 

}
