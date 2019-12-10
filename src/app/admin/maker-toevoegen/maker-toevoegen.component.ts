import { Component, OnInit } from '@angular/core';

import { Maker } from 'src/app/models/maker.model';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { Rol } from 'src/app/models/rol.model';

@Component({
  selector: 'app-maker-toevoegen',
  templateUrl: './maker-toevoegen.component.html',
  styleUrls: ['./maker-toevoegen.component.css']
})
export class MakerToevoegenComponent implements OnInit {
  model:Maker=new Maker(0,"","",false,"","","")
  modelGebruiker:Gebruiker=new Gebruiker(0,"","",1)
  submitted : boolean = false;

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    //voeg hier een maker en een maker account toe

  }

}
