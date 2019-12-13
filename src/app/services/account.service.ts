import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gebruiker } from '../models/gebruiker.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Gebruiker[]> {
    return this.http.get<Gebruiker[]>('https://localhost:44383/api/Accounts');
  }

  deleteAccount(accountID: number) {
    return this.http.delete("https://localhost:44383/api/Accounts/"+ accountID);
  }
}
