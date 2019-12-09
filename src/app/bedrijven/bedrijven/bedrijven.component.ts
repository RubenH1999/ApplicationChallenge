import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bedrijven',
  templateUrl: './bedrijven.component.html',
  styleUrls: ['./bedrijven.component.css']
})
export class BedrijvenComponent implements OnInit {

  constructor() { }
    makers: string[] = ['Ja Nee', 'Nee Ja', 'Test Test', 'Andere Naam'];
  ngOnInit() {
  }

}
