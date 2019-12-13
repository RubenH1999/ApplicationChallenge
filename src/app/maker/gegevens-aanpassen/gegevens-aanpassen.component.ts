import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-gegevens-aanpassen',
  templateUrl: './gegevens-aanpassen.component.html',
  styleUrls: ['./gegevens-aanpassen.component.css']
})
export class GegevensAanpassenComponent implements OnInit {
  maker: any;
  constructor(private account: AccountService, private auth: AuthService) { 
    console.log(this.auth.currentUser);
    this.maker = this.auth.getUserState();
  }
  

  ngOnInit() {
    
  }

}
