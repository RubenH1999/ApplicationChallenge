import {Component, OnInit} from '@angular/core';
import {Assignment} from 'src/app/models/assignment.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AssignmentService} from '../../services/assignment.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  assignmentForm = new FormGroup({
    titel: new FormControl('', Validators.required),
    omschrijving: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    statusID: new FormControl(''),
    bedrijfID: new FormControl(''),
  });

  constructor(private assignmentService: AssignmentService, private router: Router) {
  }

  ngOnInit() {

  }

  onSubmit() {
    this.assignmentForm.controls.statusID.setValue(1);
    this.assignmentForm.controls.bedrijfID.setValue(1);

    this.assignmentService.addAssignment(this.assignmentForm.value).subscribe(result => {
      console.log(result);
      console.log('assignment gemaakt');
      if (result.assignmentID) {
        this.router.navigate(['bedrijf-home']);
      }
    });
  }


}
