import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
    this.assignments.push(new Assignment(1,"Taak 1", "eertse taak", "taak", "geel", "opdracht", 1, 2, 3, null, null, null));
    this.verzoeken.push(new Assignment(2,"Taak 2", "eertse taak", "taak", "geel", "opdracht", 1, 2, 3, null, null, null));
  }

  details(assignmentID: number){

    this.router.navigate(['/assignmentDetail']);
  }

  accepteerAssignment(assignmentID: number){

    this.ngOnInit();
  }

  weigerAssignment(assignmentID: number){

    this.ngOnInit();
  }

}
