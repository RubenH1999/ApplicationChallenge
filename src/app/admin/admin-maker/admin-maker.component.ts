import { Component, OnInit } from '@angular/core';

import { Maker } from 'src/app/models/maker.model';
import { MakerService } from 'src/app/services/maker.service';
import { AccountService } from 'src/app/services/account.service';
import { Gebruiker } from 'src/app/models/gebruiker.model';

@Component({
  selector: 'app-admin-maker',
  templateUrl: './admin-maker.component.html',
  styleUrls: ['./admin-maker.component.css']
})
export class AdminMakerComponent implements OnInit {
  maker:Maker[]
  gebruiker:Gebruiker

  constructor(private _makerService:MakerService,private _acountService:AccountService) { }

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
  



  deleteMaker(id: number) {
    this._makerService.deleteMaker(id).subscribe( result => {

      this.getMakers();
    })
  }

 
  

  

}
