import { Component, OnInit } from '@angular/core';
import { Bedrijf } from 'src/app/models/bedrijf.model';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { BedrijfService } from 'src/app/services/bedrijf.service';


@Component({
  selector: 'app-bedrijf-toevoegen',
  templateUrl: './bedrijf-toevoegen.component.html',
  styleUrls: ['./bedrijf-toevoegen.component.css']
})
export class BedrijfToevoegenComponent implements OnInit {


  modelGebruiker:Gebruiker=new Gebruiker(0,"","",0)
  model:Bedrijf=new Bedrijf(0,"","","",this.modelGebruiker)

  submitted : boolean = false;

  constructor(private _bedrijfservice:BedrijfService) { }

  ngOnInit() {
  }

  onSubmit() {
    
    this.submitted = true;

    console.log(this.model)
    console.log(this.modelGebruiker)
    this._bedrijfservice.addBedrijf(this.model).subscribe();
   
    
  }

}
