import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { Maker } from 'src/app/models/maker.model';

@Component({
  selector: 'app-maker-toevoegen',
  templateUrl: './maker-toevoegen.component.html',
  styleUrls: ['./maker-toevoegen.component.css']
})
export class MakerToevoegenComponent implements OnInit {
  model:Maker=new Maker(0,"","",false,"","","")
  modelAccount:Account=new Account(0,"","")
  submitted : boolean = false;

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    //voeg hier een maker en een maker account toe

  }

}
