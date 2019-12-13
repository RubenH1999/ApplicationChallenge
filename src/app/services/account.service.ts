import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maker } from '../models/maker.model';
import { AuthService } from '../auth/auth.service';
import { Gebruiker } from '../models/gebruiker.model';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  constructor(private http: HttpClient, private auth: AuthService) { }

  getMakerByUID(authUID){
    console.log();
    return this.http.get<Gebruiker>("https://localhost:44383/api/account/getbyauthuid/" + authUID);
  }

  updateAccount(account){
    console.log(account);
    return this.http.put<Gebruiker>("https://localhost:44383/api/account/" + account.accountID, account).subscribe();
  }


  getAccounts(): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>('https://localhost:44383/api/Accounts');
  }

  deleteAccount(accountID: number) {
    return this.http.delete("https://localhost:44383/api/Accounts/"+ accountID);
  }
}
