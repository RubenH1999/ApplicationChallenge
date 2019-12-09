import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maker-home',
  templateUrl: './maker-home.component.html',
  styleUrls: ['./maker-home.component.css']
})
export class MakerHomeComponent implements OnInit {

  //assignments: Assignment[] = new Array<Assignment>();
  //verzoeken: Assignment[] = new Array<Assignment>();
  messageAssignment: string = "Geen assignments beschikbaar.";
  messageVerzoek: string = "Geen uitnodigingen.";

  constructor() { }

  ngOnInit() {
  }

}
