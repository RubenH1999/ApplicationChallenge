import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Bedrijf} from '../../models/bedrijf.model';
import {BedrijfService} from '../../services/bedrijf.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bedrijf-aanpassen',
  templateUrl: './bedrijf-aanpassen.component.html',
  styleUrls: ['./bedrijf-aanpassen.component.css']
})
export class BedrijfAanpassenComponent implements OnInit {

  bedrijf: Bedrijf;


  constructor(private bedrijfService: BedrijfService, private router: Router) {
  }

  ngOnInit() {
    this.bedrijfService.getBedrijfByAccountID(+localStorage.getItem('accountID')).subscribe(result => {
      this.bedrijf = result;
      console.log(result);
    });
  }

  onSubmit() {
    this.bedrijfService.updateBedrijf(this.bedrijf.bedrijfID, this.bedrijf).subscribe(result => {
      console.log('update is succes');
      this.router.navigate(['bedrijf-home']);
    });

  }
}
