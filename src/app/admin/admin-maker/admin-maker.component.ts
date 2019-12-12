import { Component, OnInit } from '@angular/core';

import { Maker } from 'src/app/models/maker.model';
import { MakerService } from 'src/app/services/maker.service';

@Component({
  selector: 'app-admin-maker',
  templateUrl: './admin-maker.component.html',
  styleUrls: ['./admin-maker.component.css']
})
export class AdminMakerComponent implements OnInit {
  maker:Maker[]

  constructor(private _makerService:MakerService) { }

  ngOnInit() {
    this.getMakers();
    
  }

  getMakers()
  {
    this._makerService.getMakers().subscribe(
      result => {
      this.maker=result
      
     
      console.log("maker: " + this.maker);
      }
    );
  }

}
