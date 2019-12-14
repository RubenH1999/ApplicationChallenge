import {Component, OnInit} from '@angular/core';
import {Assignment} from 'src/app/models/assignment.model';
import {Maker} from 'src/app/models/maker.model';
import {Gebruiker} from 'src/app/models/gebruiker.model';
import {Router} from '@angular/router';
import { GeintereseerdAssignment } from 'src/app/models/geintereseerd-assignment.model';
import { GeintereseerdAssignmentService } from 'src/app/services/geintereseerd-assignment.service';
import { BedrijfService } from 'src/app/services/bedrijf.service';

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
  
  constructor(private router: Router, private _intresse : GeintereseerdAssignmentService, private _bedrijf : BedrijfService) {
  }

  ngOnInit() {
    //Opvragen assignments met geintreseerden voor het ingelogde bedrijf
    //modal gebruiken voor de details te tonen van een maker.
    //Bij weigeren deleten uit db bij aanvaard de Maker ID toevoegen ana de assigments MakerID
    //status updaten???
    //this._bedrijf.getBedrijfByAccountID(localStorage.getItem('accountID')).subscribe(result => {
      //this._intresse.getAssignmentsBedrijfMetIntresse(result['bedrijfID']).subscribe(result =>{
        //console.log(result);
      //})
    //})

    this._bedrijf.getBedrijfByAccountID(3).subscribe(result => {
      this._intresse.getAssignmentsBedrijfMetIntresse(result['bedrijfID']).subscribe(result =>{
        console.log(result);
        this.AssignmentGeintresseerden = result;
      })
    })

  }

  makerDetails(makerID: number) {
    this.router.navigate(['/makerdetail']);
  }

}
