import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoek',
  templateUrl: './zoek.component.html',
  styleUrls: ['./zoek.component.css']
})
export class ZoekComponent implements OnInit {

  autoComplete: string[] = new Array<string>(); 
  tags: string[] = new Array<string>(); 
  //assignments: Assignment[] = new Array<Assignment>();
  //bedrijven: Bedrijf[] = new Array<Bedrijf>();

  constructor() { }

  ngOnInit() {
    this.autoComplete = ['Item1', 'item2', 'ok'];
  }

  zoeken(){
    
    this.ngOnInit();
  }

}
