import {Component, OnInit} from '@angular/core';
import {Assignment} from '../../models/assignment.model';
import {AssignmentService} from '../../services/assignment.service';

@Component({
  selector: 'app-bedrijf-home',
  templateUrl: './bedrijf-home.component.html',
  styleUrls: ['./bedrijf-home.component.css']
})
export class BedrijfHomeComponent implements OnInit {

  assignments: Assignment[];

  constructor(private assignmentService: AssignmentService) {
  }

  ngOnInit() {
    this.assignmentService.getAssignmentsByBedrijf(1).subscribe(result => {
      this.assignments = result;
      console.log(result);
    });
  }

}
