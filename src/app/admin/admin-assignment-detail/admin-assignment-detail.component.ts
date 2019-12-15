import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Assignment } from 'src/app/models/assignment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from 'src/app/services/assignment.service';

@Component({
  selector: 'app-admin-assignment-detail',
  templateUrl: './admin-assignment-detail.component.html',
  styleUrls: ['./admin-assignment-detail.component.css']
})
export class AdminAssignmentDetailComponent implements OnInit {

  id=0
  private routeSub: Subscription;
  assignment: Assignment;

  constructor(private route: ActivatedRoute, private router:Router, private _assignmentService:AssignmentService, ) { }

  ngOnInit() {
    this.routeSub=this.route.params.subscribe(params=>{
      this.id=params['id']
     
      });
    this._assignmentService.getAssignment(this.id).subscribe(
      result => {  
        this.assignment = result;  
      }
    );
  }

  onSubmit() {
    this._assignmentService.updateAssignment(this.assignment.assignmentID, this.assignment).subscribe(result => {
      console.log('update is succes');
      this.router.navigate(['assignments']);
    });

  }

}


