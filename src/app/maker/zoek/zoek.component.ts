import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { Bedrijf } from 'src/app/models/bedrijf.model';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-zoek',
  templateUrl: './zoek.component.html',
  styleUrls: ['./zoek.component.css']
})
export class ZoekComponent implements OnInit {

  autoComplete: string[] = new Array<string>(); 
  tags: string[] = new Array<string>(); 
  assignments: Assignment[] = new Array<Assignment>();
  bedrijven: Bedrijf[] = new Array<Bedrijf>();

  constructor() { }

  ngOnInit() {
    this.autoComplete = ['Item1', 'item2', 'ok'];
    this.assignments.push(new Assignment(1,"Taak 1", "eertse taak", "taak", "geel", "opdracht", 1, 2, 3));
    this.bedrijven.push(new Bedrijf(1, "geel", "tag", "ok", "045923", new Account(1, "ok", "thomas more")));   
  }

  zoeken(){

    this.ngOnInit();
  }

}
