import { Component, OnInit } from '@angular/core';
import { Bedrijf } from 'src/app/models/bedrijf.model';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { BedrijfService } from 'src/app/services/bedrijf.service';

import { Rol } from 'src/app/models/rol.model';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
  selector: 'app-bedrijf-toevoegen',
  templateUrl: './bedrijf-toevoegen.component.html',
  styleUrls: ['./bedrijf-toevoegen.component.css']
})
export class BedrijfToevoegenComponent implements OnInit {
  authError: any;
  rollen: Rol[];
  sRole = null;
  password: string;
 


  gebruiker = new Gebruiker(0, '', '', '', 3);
  bedrijf = new Bedrijf(0, '', '', 0, this.gebruiker.gebruikerID);

  submitted: boolean = false;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

  onSubmit() {

    this.submitted = true;

    console.log(this.gebruiker);
    console.log(this.bedrijf);
    //this.auth.postBedrijf(this.bedrijf).subscribe()
    this.auth.createUser(this.gebruiker, this.password, this.gebruiker, this.bedrijf);


  }

}
