import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { Bedrijf } from 'src/app/models/bedrijf.model';
import { Router } from '@angular/router';
import { AssignmentService } from 'src/app/services/assignment.service';
import { TagService } from 'src/app/services/tag.service';
import { BedrijfService } from 'src/app/services/bedrijf.service';

@Component({
  selector: 'app-zoek',
  templateUrl: './zoek.component.html',
  styleUrls: ['./zoek.component.css']
})
export class ZoekComponent implements OnInit {

  autoComplete: string[]; 
  tags: string[]; 
  assignments: Assignment[];
  bedrijven: Bedrijf[];
  teller: number = 0;

  constructor(private _assignmentService: AssignmentService, private _bedrijfService: BedrijfService, private _tagService: TagService, private router: Router) { }

  ngOnInit() {
    this.autoComplete = new Array<string>();
    this.assignments = new Array<Assignment>();
    this.bedrijven = new Array<Bedrijf>();
    this._tagService.getAllTags().subscribe(
      result => {  
        result.forEach(tag => {    
          this.autoComplete.push(tag.beschrijving);
        }); 
      }  
    );

    if(this.tags.length != 0) {
      this._assignmentService.getAssignments().subscribe(
        result => {       
          result.forEach(assignment => {    
            assignment.tagAssignments.forEach(tagAssignment => {
              if (this.tags.includes(tagAssignment.tag.beschrijving)) {
                this.teller++;
              }
            });
            if (this.teller == this.tags.length) {
              this.assignments.push(assignment);
            }
          });  
          this.teller = 0;   
        }
      );
      this._bedrijfService.getBedrijven().subscribe(
        result => {  
          result.forEach(bedrijf => {  
            bedrijf.tagBedrijven.forEach(tagBedrijf => {
              if (this.tags.includes(tagBedrijf.tag.beschrijving)) {
                this.teller++;
              }
            });
            if (this.teller == this.tags.length) {
              this.bedrijven.push(bedrijf);
            }
          });      
          this.teller = 0;
        }
      );
    }
  }

  zoeken(){
    this.ngOnInit();
  }

  assignmentDetails(assignmentID: number){
    localStorage.setItem("assignmentId", assignmentID + "")
    this.router.navigate(['/assignmentDetail']);
  }

  bedrijfDetails(bedrijfID: number){
    localStorage.setItem("bedrijfId", bedrijfID + "")
    this.router.navigate(['/bedrijfDetail']);
  }

}
