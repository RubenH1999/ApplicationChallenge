import { Component, OnInit } from '@angular/core';
import {Bedrijf} from '../../models/bedrijf.model';
import {BedrijfService} from '../../services/bedrijf.service';

@Component({
  selector: 'app-review-schrijven',
  templateUrl: './review-schrijven.component.html',
  styleUrls: ['./review-schrijven.component.css']
})
export class ReviewSchrijvenComponent implements OnInit {

  bedrijven: Bedrijf[];
  constructor(private bedrijfService: BedrijfService) { }

  ngOnInit() {
    this.bedrijfService.getBedrijvenMetGebruiker().subscribe(result => {
      this.bedrijven = result;
      console.log(result);
    });
  }
  onSubmit() {

  }
}
