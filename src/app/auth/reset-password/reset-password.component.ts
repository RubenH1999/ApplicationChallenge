import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email: string;
  constructor(private auth : AuthService) { }

  ngOnInit() {
  }
  resetPassword(){
    this.auth.resetPassword(this.email);
  }
}
