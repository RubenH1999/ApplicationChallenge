import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Maker } from 'src/app/models/maker.model';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-gegevens-aanpassen',
  templateUrl: './gegevens-aanpassen.component.html',
  styleUrls: ['./gegevens-aanpassen.component.css']
})
export class GegevensAanpassenComponent implements OnInit {
  
  constructor(private account: AccountService, private auth: AuthService) { 
    
    this.account.getMakerByUID(localStorage.getItem('authUID')).subscribe(result => {
      console.log(result);
      
      
    })
    
  }
  gebruiker: Account;
  id: any;
  maker: Maker;

  ngOnInit() {
    
  }

}
