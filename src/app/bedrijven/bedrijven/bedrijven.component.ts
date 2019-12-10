import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { Maker } from 'src/app/models/maker.model';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bedrijven',
  templateUrl: './bedrijven.component.html',
  styleUrls: ['./bedrijven.component.css']
})
export class BedrijvenComponent implements OnInit {
  assignments: Assignment[] = new Array<Assignment>();
  makers: Maker[] = new Array<Maker>();
  gebruikers: Gebruiker[] = new Array<Gebruiker>();
  constructor(private router: Router) { }
  ngOnInit() {
    this.assignments.push(new Assignment(1,"Taak 1", "eertse taak", "geel", "opdracht", 1, 2, 3));
    this.gebruikers.push(new Gebruiker(1, "email", "Henry", 1));
    this.gebruikers.push(new Gebruiker(2, "email", "Kaat", 1))

    this.makers.push(new Maker(1,"17/05/1957", "Biografie", false, "LinkedIn", "Ervaring", "1987456", this.gebruikers[0]));
    this.makers.push(new Maker(1,"17/05/1957", "Biografie", false, "LinkedIn", "Ervaring", "1987456", this.gebruikers[1]));
  }
  makerDetails(makerID: number){
    this.router.navigate(['/makerDetail']);
  }

}
