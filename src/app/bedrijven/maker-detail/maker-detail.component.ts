import { Component, OnInit, Input, Inject } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { Maker } from 'src/app/models/maker.model';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssignmentOverzichtComponent, DialogData } from '../assignment-overzicht/assignment-overzicht.component'

@Component({
  selector: 'app-maker-detail',
  templateUrl: './maker-detail.component.html',
  styleUrls: ['./maker-detail.component.css']
})
export class MakerDetailComponent implements OnInit {
  @Input() maker: Maker;
  
  constructor(private router: Router,public dialogRef: MatDialogRef<AssignmentOverzichtComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    
    
  }

}
