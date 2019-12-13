import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Maker } from 'src/app/models/maker.model';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { MakerService } from 'src/app/services/maker.service';

@Component({
  selector: 'app-gegevens-aanpassen',
  templateUrl: './gegevens-aanpassen.component.html',
  styleUrls: ['./gegevens-aanpassen.component.css']
})
export class GegevensAanpassenComponent implements OnInit {
  
  constructor(private _account: AccountService, private auth: AuthService, private _maker: MakerService) { 
    
    this._account.getMakerByUID(localStorage.getItem('authUID')).subscribe(result => {
      console.log(result);
      this.account= result;
    });

    
    
  }
  
  account : Account;
  
  maker: Maker;
  

  ngOnInit() {
    
  }

}
