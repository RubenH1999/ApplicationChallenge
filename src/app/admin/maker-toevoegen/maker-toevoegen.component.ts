import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

import { Maker } from 'src/app/models/maker.model';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { Rol } from 'src/app/models/rol.model';
=======
import { Maker } from 'src/app/models/maker.model';
import { Gebruiker } from 'src/app/models/gebruiker.model';

>>>>>>> d9af14931e344834c6a8d5ba4348e03fb55e4498

@Component({
  selector: 'app-maker-toevoegen',
  templateUrl: './maker-toevoegen.component.html',
  styleUrls: ['./maker-toevoegen.component.css']
})
export class MakerToevoegenComponent implements OnInit {
  model:Maker=new Maker(0,"","",false,"","","")
<<<<<<< HEAD
  modelGebruiker:Gebruiker=new Gebruiker(0,"","",1)
=======
  modelAccount:Gebruiker=new Gebruiker(0,"","",0)
>>>>>>> d9af14931e344834c6a8d5ba4348e03fb55e4498
  submitted : boolean = false;

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    //voeg hier een maker en een maker account toe

  }

}
