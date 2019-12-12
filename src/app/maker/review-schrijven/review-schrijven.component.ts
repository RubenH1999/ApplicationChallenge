import { Component, OnInit } from '@angular/core';
import {Bedrijf} from '../../models/bedrijf.model';
import {BedrijfService} from '../../services/bedrijf.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReviewService} from '../../services/review.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-review-schrijven',
  templateUrl: './review-schrijven.component.html',
  styleUrls: ['./review-schrijven.component.css']
})
export class ReviewSchrijvenComponent implements OnInit {

  bedrijven: Bedrijf[];

  reviewForm = new FormGroup({
    beschrijving: new FormControl('', Validators.required),
    ontvangerID: new FormControl('', Validators.required),
    verzenderID: new FormControl('')
  });

  constructor(private router: Router, private bedrijfService: BedrijfService, private reviewService: ReviewService) { }

  ngOnInit() {
    this.bedrijfService.getBedrijvenMetGebruiker().subscribe(result => {
      this.bedrijven = result;
      console.log(result);
    });
  }
  onSubmit() {
    this.reviewForm.controls.verzenderID.setValue(1);

    this.reviewService.addReview(this.reviewForm.value).subscribe( result => {
      console.log('review wegschrijven gelukt');
      if (result.reviewID) {
        this.router.navigate(['reviews-maker']);
      }
    });
  }
  // review over een bedrijf maken is klaar: Fatih
}
