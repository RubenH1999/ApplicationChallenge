import { Component, OnInit } from '@angular/core';
import { Bedrijf } from 'src/app/models/bedrijf.model';
import { BedrijfService } from 'src/app/services/bedrijf.service';

@Component({
  selector: 'app-bedrijf-detail',
  templateUrl: './bedrijf-detail.component.html',
  styleUrls: ['./bedrijf-detail.component.css']
})
export class BedrijfDetailComponent implements OnInit {

  bedrijf: Bedrijf;

  constructor(private _bedrijfService: BedrijfService) { }

  ngOnInit() {
    this._bedrijfService.getBedrijf(Number(localStorage.getItem("bedrijfId"))).subscribe(
      result => {  
        this.bedrijf = result;  
      }
    );
  }

}
