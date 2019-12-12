import {Component, OnInit} from '@angular/core';
import {Maker} from 'src/app/models/maker.model';
import {Gebruiker} from 'src/app/models/gebruiker.model';
import {MakerService} from 'src/app/services/maker.service';


@Component({
  selector: 'app-maker-toevoegen',
  templateUrl: './maker-toevoegen.component.html',
  styleUrls: ['./maker-toevoegen.component.css']
})
export class MakerToevoegenComponent implements OnInit {
  // model:Maker=new Maker(0,"","",false,"","",0,0)
  // modelGebruiker:Gebruiker=new Gebruiker(0,"","", '',"",1)
  // modelAccount:Gebruiker=new Gebruiker(0,"","","", '',0)


  model: Maker = new Maker(0, '', '', false, '', '', 0, 0);
  modelGebruiker: Gebruiker = new Gebruiker(0, '', '', '', 1);
  modelAccount: Gebruiker = new Gebruiker(0, '', '', '', 0);


  constructor(private _makerService: MakerService) {
  }

  ngOnInit() {

  }

  onSubmit() {
    // console.log(this.model)
    // console.log(this.modelGebruiker)
    // this._makerService.addMaker(this.model).subscribe();


  }

}
