import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { Router } from '@angular/router';
import { Status } from 'src/app/models/status.model';
import { AssignmentService } from 'src/app/services/assignment.service';
import { MakerService } from 'src/app/services/maker.service';
import { TagMaker } from 'src/app/models/tag-maker.model';
import { TagmakerService } from 'src/app/services/tagmaker.service';
import { TagassignmentService } from 'src/app/services/tagassignment.service';

@Component({
  selector: 'app-maker-home',
  templateUrl: './maker-home.component.html',
  styleUrls: ['./maker-home.component.css']
})
export class MakerHomeComponent implements OnInit {

  assignments: Assignment[];
  laagste: Assignment;
  aanbevelingen: Assignment[] = new Array<Assignment>();
  topDrie: number[] = new Array<number>();
  teller: number = 0;
  messageAssignment: boolean = false;

  constructor(private _assignmentService: AssignmentService, private _makerService: MakerService, private _tagMakerService: TagmakerService, private _tagAssignmentService: TagassignmentService, private router: Router) { }

  ngOnInit() {
      this._assignmentService.getAssignmentsWhereGebruikerID(Number(localStorage.getItem("accountID"))).subscribe(
        result => {  
          this.assignments = result;
        },
        (err) => {
          this.messageAssignment = true;
        }
      );
      this._tagMakerService.getTagMakersWhereGebruikerID(Number(localStorage.getItem("accountID"))).subscribe(tagmakers => { 
          this._assignmentService.getAssignments().subscribe(
            assignments => {       
              assignments.forEach(assignment => {  
                this._tagAssignmentService.getTagAssignmentsWhereAssignmentID(assignment.assignmentID).subscribe(tagassignments =>{
                  tagassignments.forEach(tagassignment => {
                    tagmakers.forEach(tagmaker => {
                      if (tagmaker.tagID == tagassignment.tagID) {
                        this.teller++;
                      }
                    });
                  });
                  assignment.aanbeveling = this.teller;
                  if (this.aanbevelingen.length < 3) {
                    this.topDrie.push(this.teller);                  
                    this.aanbevelingen.push(assignment);
                    if (this.teller = Math.min.apply(null, this.topDrie)) {
                      this.laagste = assignment;
                    }
                  }
                  else if (this.teller > Math.min.apply(null, this.topDrie)) { 
                    var minIndex = this.topDrie.indexOf(Math.min.apply(null, this.topDrie));
                    this.topDrie.splice(minIndex, 1);
                    var index = this.aanbevelingen.indexOf(this.laagste);
                    this.aanbevelingen.splice(index, 1);
                    this.topDrie.push(this.teller);                  
                    this.aanbevelingen.push(assignment);
                    if (this.teller = Math.min.apply(null, this.topDrie)) {
                      this.laagste = assignment;
                    }
                  }
                  this.teller = 0;
                });                           
              });    
            }
          );
      });     
  }

  details(assignmentID: number){
    localStorage.setItem("assignmentId", assignmentID + "")
    this.router.navigate(['/assignmentDetail']);
  }

}
