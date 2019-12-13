import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Maker } from 'src/app/models/maker.model';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { MakerService } from 'src/app/services/maker.service';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gegevens-aanpassen',
  templateUrl: './gegevens-aanpassen.component.html',
  styleUrls: ['./gegevens-aanpassen.component.css']
})
export class GegevensAanpassenComponent implements OnInit {
  
  constructor(private _account: AccountService, private auth: AuthService, private _maker: MakerService, private router : Router) { 
    
    this._account.getMakerByUID(localStorage.getItem('authUID')).subscribe(result => {
      console.log(result);
      this.account= result;

    });
    this._maker.getMakerByID(localStorage.getItem('accountID')).subscribe(result => {
      console.log(result);
      this.maker = result;
    })
    
    
  }
  pasAan(){
    
    this._account.updateAccount(this.account);
    this._maker.updateMaker(this.maker);
    this.auth.changeEmail(this.account.email);
    this.router.navigate(['']);
  }

  
  
  account : Gebruiker;
  
  maker: Maker;
  

  ngOnInit() {
    
  }

}
