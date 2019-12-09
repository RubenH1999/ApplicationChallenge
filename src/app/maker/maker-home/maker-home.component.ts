import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';

@Component({
  selector: 'app-maker-home',
  templateUrl: './maker-home.component.html',
  styleUrls: ['./maker-home.component.css']
})
export class MakerHomeComponent implements OnInit {

  assignments: Assignment[] = new Array<Assignment>();
  verzoeken: Assignment[] = new Array<Assignment>();
  messageAssignment: string = "Geen assignments beschikbaar.";
  messageVerzoek: string = "Geen uitnodigingen.";

  constructor() { }

  ngOnInit() {
    this.assignments.push(new Assignment(1,"Taak 1", "eertse taak", "taak", "geel", "opdracht", 1, 2, 3));
    this.verzoeken.push(new Assignment(2,"Taak 2", "eertse taak", "taak", "geel", "opdracht", 1, 2, 3));
  }

}
