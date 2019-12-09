import { Component, OnInit } from '@angular/core';
import { Bedrijf } from 'src/app/models/bedrijf.model';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-bedrijf-toevoegen',
  templateUrl: './bedrijf-toevoegen.component.html',
  styleUrls: ['./bedrijf-toevoegen.component.css']
})
export class BedrijfToevoegenComponent implements OnInit {
  model:Bedrijf=new Bedrijf(0,"","","","")
  modelAccount:Account=new Account(0,"","")
  submitted : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    //voeg hier een bedrijf en een bedrijf account toe

   
    
  }

}
