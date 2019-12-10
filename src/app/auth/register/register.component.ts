import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { AuthService } from '../auth.service';
import { Rol } from 'src/app/models/rol.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authError: any;
  rollen: Rol[];
  constructor(private auth:AuthService) { 
    
  }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }
  onChange(rolValue){
    console.log(rolValue);
  }

  
  createUser(frm) {
    this.auth.createUser(frm.value);
  }
}
