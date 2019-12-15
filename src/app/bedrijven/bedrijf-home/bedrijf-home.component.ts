import {Component, OnInit} from '@angular/core';
import {Assignment} from '../../models/assignment.model';
import {AssignmentService} from '../../services/assignment.service';
import {Bedrijf} from '../../models/bedrijf.model';
import {BedrijfService} from '../../services/bedrijf.service';

@Component({
  selector: 'app-bedrijf-home',
  templateUrl: './bedrijf-home.component.html',
  styleUrls: ['./bedrijf-home.component.css']
})
export class BedrijfHomeComponent implements OnInit {

  assignments: Assignment[];
  bedrijf: Bedrijf;

  constructor(private assignmentService: AssignmentService, private bedrijfService: BedrijfService) {
  }

  ngOnInit() {
    this.bedrijfService.getBedrijfByAccountID(+localStorage.getItem('accountID')).subscribe(result => {
      this.bedrijf = result;
      this.assignmentService.getAssignmentsByBedrijf(result.bedrijfID).subscribe(res => {
        this.assignments = res;
      });
    });
  }

}
