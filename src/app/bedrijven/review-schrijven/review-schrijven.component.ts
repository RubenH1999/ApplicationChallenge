import {Component, OnInit} from '@angular/core';
import {Maker} from '../../models/maker.model';
import {Router} from '@angular/router';
import {BedrijfService} from '../../services/bedrijf.service';
import {ReviewService} from '../../services/review.service';
import {MakerService} from '../../services/maker.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-review-schrijven',
  templateUrl: './review-schrijven.component.html',
  styleUrls: ['./review-schrijven.component.css']
})
export class ReviewSchrijvenComponent implements OnInit {

  makers: Maker[];

  reviewForm = new FormGroup({
    beschrijving: new FormControl('', Validators.required),
    ontvangerID: new FormControl('', Validators.required),
    verzenderID: new FormControl('')
  });

  constructor(private router: Router, private makerService: MakerService, private reviewService: ReviewService) {

  }

  ngOnInit() {
    this.makerService.getMakersMetGebruiker().subscribe(result => {
      this.makers = result;
      console.log(result);
    });
  }

  onSubmit() {
    this.reviewForm.controls.verzenderID.setValue(+localStorage.getItem('accountID'));

    this.reviewService.addReview(this.reviewForm.value).subscribe( result => {
      console.log('review wegschrijven gelukt');
      if (result.reviewID) {
        this.router.navigate(['reviews-bedrijf']);
      }
    });
  }
  // review over een maker maken is klaar: Fatih

}
