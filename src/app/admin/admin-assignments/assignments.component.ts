import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentService } from 'src/app/services/assignment.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  assignments:Assignment[]
 

  constructor(private _assignmentService:AssignmentService) { }

  ngOnInit() {
    
  this.getAssignments();
  }

 getAssignments()
  {
    this._assignmentService.getAssignments().subscribe(
      result => {
      this.assignments=result
  
    
      }
    );
  }
  
  deleteAssignment(id: number) {
    this._assignmentService.deleteAssignment(id).subscribe( result => {

      this.getAssignments();
    })
  }


}
