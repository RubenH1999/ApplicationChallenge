import {Component, OnInit} from '@angular/core';
import {Maker} from 'src/app/models/maker.model';
import {Gebruiker} from 'src/app/models/gebruiker.model';
import {MakerService} from 'src/app/services/maker.service';
import { Bedrijf } from 'src/app/models/bedrijf.model';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-maker-toevoegen',
  templateUrl: './maker-toevoegen.component.html',
  styleUrls: ['./maker-toevoegen.component.css']
})
export class MakerToevoegenComponent implements OnInit {
  authError: any;
  password: string;
 
  gebruiker = new Gebruiker(0, '', '', '', 2);
  maker = new Maker(0, '', '', false, '', '', 0, 0);
  bedrijf = new Bedrijf(0, '', '',"", 0, 0);


  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

  onSubmit() {
    console.log(this.gebruiker);
    console.log(this.maker);

    this.auth.createUser(this.gebruiker, this.password, this.maker, this.bedrijf);

  }

}
