import { Component, OnInit } from '@angular/core';
import { BedrijfService } from '../bedrijf.service';
import { Bedrijf } from 'src/app/models/bedrijf.model';

@Component({
  selector: 'app-admin-bedrijven',
  templateUrl: './admin-bedrijven.component.html',
  styleUrls: ['./admin-bedrijven.component.css']
})
export class AdminBedrijvenComponent implements OnInit {
bedrijven:Bedrijf[];



  constructor(private _bedrijvenService:BedrijfService) { }

  ngOnInit() {
    this.getBedrijven()
  }

  getBedrijven()
  {
    this._bedrijvenService.getBedrijven().subscribe(
      result => {
      this.bedrijven=result
      
     
      console.log("bedrijven: " + this.bedrijven);
      }
    );
  }
  

}
