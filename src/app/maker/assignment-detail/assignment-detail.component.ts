import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentService } from 'src/app/services/assignment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  open: boolean = false;
  assignment: Assignment;

  constructor(private _assignmentService: AssignmentService, private router: Router) { }

  ngOnInit() {
    this._assignmentService.getAssignment(Number(localStorage.getItem("assignmentId"))).subscribe(
      result => {  
        this.assignment = result; 
        if (this.assignment.status.beschrijving == "Open") {
          this.open = true;
        }
      }
    );
  }

  addInteresse(){

  }

  bedrijfDetails(bedrijfID: number){
    localStorage.setItem("bedrijfId", bedrijfID + "")
    this.router.navigate(['/bedrijfDetail']);
  }

}
