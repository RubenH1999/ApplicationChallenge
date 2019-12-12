import { Component, OnInit } from '@angular/core';
import {Bedrijf} from '../../models/bedrijf.model';
import {BedrijfService} from '../../services/bedrijf.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor(private bedrijfService: BedrijfService) { }

  ngOnInit() {
    this.bedrijfService.getBedrijvenMetGebruiker().subscribe(result => {
      this.bedrijven = result;
      console.log(result);
    });
  }
  onSubmit() {
    this.reviewForm.controls.verzenderID.setValue(1);
    console.log(this.reviewForm.value);
  }
}
