import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maker } from '../models/maker.model';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  constructor(private http: HttpClient, private auth: AuthService) { }

  getMakerByUID(authUID){
    console.log();
    return this.http.get<Account>("https://localhost:44383/api/account/getbyauthuid/" + authUID);
  }

}
