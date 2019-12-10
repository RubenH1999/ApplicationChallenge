import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';



@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  assignments: Assignment[] = new Array<Assignment>();
  types = new Array('Stage', 'Opdracht');
  autoComplete: string[] = new Array<string>(); 
  
  constructor() { }
  
  ngOnInit() {
    this.assignments.push(new Assignment(1,"Taak 1", "eerste taak", "taak", "geel",1,2,3));
    this.autoComplete = ['Item1', 'item2', 'ok'];
  }
  assignment(){
    
  }
  onSubmit

}
