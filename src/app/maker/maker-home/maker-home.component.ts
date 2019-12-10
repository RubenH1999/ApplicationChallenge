import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { Router } from '@angular/router';
import { Status } from 'src/app/models/status.model';
import { AssignmentService } from 'src/app/services/assignment.service';

@Component({
  selector: 'app-maker-home',
  templateUrl: './maker-home.component.html',
  styleUrls: ['./maker-home.component.css']
})
export class MakerHomeComponent implements OnInit {

  assignments: Assignment[];
  messageAssignment: boolean = false;

  constructor(private _assignmentService: AssignmentService, private router: Router) { }

  ngOnInit() {
    this._assignmentService.getAssignmentsWhereGebruikerID(Number(localStorage.getItem("gebruikerId"))).subscribe(
      result => {  
        this.assignments = result;
      },
      (err) => {
        this.messageAssignment = true;
      }
    );
  }

  details(assignmentID: number){
    localStorage.setItem("assignmentId", assignmentID + "")
    this.router.navigate(['/assignmentDetail']);
  }

}
