import {Component, OnInit} from '@angular/core';
import {Assignment} from 'src/app/models/assignment.model';
import {Maker} from 'src/app/models/maker.model';
import {Gebruiker} from 'src/app/models/gebruiker.model';
import {Router} from '@angular/router';
import { GeintereseerdAssignment } from 'src/app/models/geintereseerd-assignment.model';
import { GeintereseerdAssignmentService } from 'src/app/services/geintereseerd-assignment.service';
import { BedrijfService } from 'src/app/services/bedrijf.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { AssignmentService } from 'src/app/services/assignment.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-assignment-overzicht',
  templateUrl: './assignment-overzicht.component.html',
  styleUrls: ['./assignment-overzicht.component.css']
})
export class AssignmentOverzichtComponent implements OnInit {
  assignments: Assignment[] = new Array<Assignment>();
  makers: Maker[] = new Array<Maker>();
  gebruikers: Gebruiker[] = new Array<Gebruiker>();
  AssignmentGeintresseerden: GeintereseerdAssignment[];
  Assignment: Assignment;
  constructor(private router: Router, private _intresse : GeintereseerdAssignmentService, private _bedrijf : BedrijfService, private _assignment : AssignmentService) {
  }

  ngOnInit() {
    
    
    this._bedrijf.getBedrijfByAccountID(JSON.parse(localStorage.getItem('accountID'))).subscribe(result => {
      this._intresse.getAssignmentsBedrijfMetIntresse(result['bedrijfID']).subscribe(result =>{
        console.log(result);
        
        this.AssignmentGeintresseerden = result;
        console.log(this.AssignmentGeintresseerden);
        
        
      })
    })

  }

  makerDetails(makerID: number) {
    this.router.navigate(['/makerdetail']);
  }

  weigerMaker(assigmentGID){
    console.log(assigmentGID);
    this._intresse.verwijderGeintresseerde(assigmentGID).subscribe(result => {
      console.log("maker geweigerd");
    })
  }

  accepteerMaker(assignment: Assignment, makerID){
    console.log(makerID);
    assignment.makerID = makerID;
    assignment.statusID = 2;
    this._assignment.addMakerToAssignment(assignment.assignmentID, assignment).subscribe(result => {
      console.log("maker aanvaard voor taak");
    })
  }
}
