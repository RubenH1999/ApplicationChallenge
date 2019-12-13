import { Component, OnInit } from '@angular/core';
import { Bedrijf } from 'src/app/models/bedrijf.model';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { BedrijfService } from 'src/app/services/bedrijf.service';

import { Rol } from 'src/app/models/rol.model';
import { AuthService } from 'src/app/auth/auth.service';
import { Maker } from 'src/app/models/maker.model';



@Component({
  selector: 'app-bedrijf-toevoegen',
  templateUrl: './bedrijf-toevoegen.component.html',
  styleUrls: ['./bedrijf-toevoegen.component.css']
})
export class BedrijfToevoegenComponent implements OnInit {
  authError: any;
  password: string;
 
  gebruiker = new Gebruiker(0, '', '', '', 3);
  maker = new Maker(0, '', '', false, '', '', 0, 0);
  bedrijf = new Bedrijf(0, '', '',"", 0, 0);

  submitted: boolean = false;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

  onSubmit() {
    console.log(this.gebruiker);
    console.log(this.bedrijf);

    this.auth.createUser(this.gebruiker, this.password, this.maker, this.bedrijf);

  }

}
