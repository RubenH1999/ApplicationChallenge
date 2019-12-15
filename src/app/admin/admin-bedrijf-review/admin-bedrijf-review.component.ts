import { Component, OnInit } from '@angular/core';
import { Bedrijf } from 'src/app/models/bedrijf.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BedrijfService } from 'src/app/services/bedrijf.service';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/models/review.model';

@Component({
  selector: 'app-admin-bedrijf-review',
  templateUrl: './admin-bedrijf-review.component.html',
  styleUrls: ['./admin-bedrijf-review.component.css']
})
export class AdminBedrijfReviewComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
/*  geschrevenReviews: Review[];
  ontvangenReviews: Review[];
  geschrevenMSG: boolean = false;
  verzondenMSG: boolean = false;

  id=0
  private routeSub: Subscription;
  bedrijf: Bedrijf;
  review:Review

  constructor(private route: ActivatedRoute, private router:Router, private _bedrijfService:BedrijfService,private reviewService: ReviewService ) { }

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

  onSubmit() {
    this.reviewService.updateReview(this.review.reviewID, this.ontvangenReviews).subscribe(result => {
      console.log('update is succes');
     
    });

  }
  */


}
