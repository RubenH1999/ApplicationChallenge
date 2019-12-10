import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { Status } from 'src/app/models/status.model';
import { Bedrijf } from 'src/app/models/bedrijf.model';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { TagAssignment } from 'src/app/models/tag-assignment.model';
import { Tag } from 'src/app/models/tag.model';
import { AssignmentService } from 'src/app/assignment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  open: boolean = false;
  closed: boolean = false;
  assignment: Assignment;

  constructor(private _assignmentService: AssignmentService, private router: Router) { }

  ngOnInit() {
    this._assignmentService.getAssignment(Number(localStorage.getItem("assignmentId"))).subscribe(
      result => {  
        this.assignment = result; 
        if (this.assignment.status.beschrijving == "open") {
          this.open = true;
        }
        if (this.assignment.status.beschrijving == "closed") {
          this.closed = true;
        }      
      }
    );
  }

  stuurMail(){

  }

  review(){
    localStorage.setItem("reviewId", this.assignment.bedrijfID + "")
    this.router.navigate(['/reviewSchrijven']);
  }

}
