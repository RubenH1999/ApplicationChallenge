import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD


import { Maker } from 'src/app/models/maker.model';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { Rol } from 'src/app/models/rol.model';


=======
import { Maker } from 'src/app/models/maker.model';
import { Gebruiker } from 'src/app/models/gebruiker.model';

>>>>>>> 86d97d9a87b1fa99850227d16db9364df9b05161

@Component({
  selector: 'app-maker-toevoegen',
  templateUrl: './maker-toevoegen.component.html',
  styleUrls: ['./maker-toevoegen.component.css']
})
export class MakerToevoegenComponent implements OnInit {
  model:Maker=new Maker(0,"","",false,"","","")
<<<<<<< HEAD

  modelGebruiker:Gebruiker=new Gebruiker(0,"","",1)

  modelAccount:Gebruiker=new Gebruiker(0,"","",0)
=======
  modelGebruiker:Gebruiker=new Gebruiker(0,"","",1)

>>>>>>> 86d97d9a87b1fa99850227d16db9364df9b05161

  submitted : boolean = false;

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    //voeg hier een maker en een maker account toe
    //Waardeloze commentaar in een poging github te laten werken
  }

}
