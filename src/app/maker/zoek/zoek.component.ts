import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { Bedrijf } from 'src/app/models/bedrijf.model';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { Router } from '@angular/router';
import { AssignmentService } from 'src/app/assignment.service';
import { Tag } from 'src/app/models/tag.model';

@Component({
  selector: 'app-zoek',
  templateUrl: './zoek.component.html',
  styleUrls: ['./zoek.component.css']
})
export class ZoekComponent implements OnInit {

  autoComplete: string[] = new Array<string>(); 
  tags: string[] = new Array<string>(); 
  assignments: Assignment[] = new Array<Assignment>();
  bedrijven: Bedrijf[] = new Array<Bedrijf>();

  constructor(private _assignmentService: AssignmentService, private router: Router) { }

  ngOnInit() {
    this._assignmentService.getAllTags().subscribe(
      result => {  
        result.forEach(tag => {    
          this.autoComplete.push(tag.beschrijving);
        }); 
      }  
    );
  }

  zoeken(){
    this._assignmentService.getAssignmentsWithTags(this.tags).subscribe(
      result => {  
        this.assignments = result;
      }
    );
    this._assignmentService.getBedrijvenWithTags(this.tags).subscribe(
      result => {  
        this.bedrijven = result;  
      }
    );
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
