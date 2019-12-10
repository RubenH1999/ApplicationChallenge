import { Component, OnInit } from '@angular/core';
import { Bedrijf } from 'src/app/models/bedrijf.model';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { TagBedrijf } from 'src/app/models/tag-bedrijf.model';
import { Assignment } from 'src/app/models/assignment.model';
import { Tag } from 'src/app/models/tag.model';
import { AssignmentService } from 'src/app/assignment.service';

@Component({
  selector: 'app-bedrijf-detail',
  templateUrl: './bedrijf-detail.component.html',
  styleUrls: ['./bedrijf-detail.component.css']
})
export class BedrijfDetailComponent implements OnInit {

  bedrijf: Bedrijf;

  constructor(private _assignmentService: AssignmentService) { }

  ngOnInit() {
    this._assignmentService.getBedrijf(Number(localStorage.getItem("bedrijfId"))).subscribe(
      result => {  
        this.bedrijf = result;  
      }
    );
  }

}
