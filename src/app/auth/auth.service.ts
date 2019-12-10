import { Injectable } from '@angular/core';
import { FirebaseAuth } from '@angular/fire';
import { HttpClient} from '@angular/common/http'
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Gebruiker } from '../models/gebruiker.model';
import { Rol } from '../models/rol.model';
import { Maker } from '../models/maker.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  newUser: any;
  gebruiker: any;
  gebAuth: any;
  
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  constructor(private auth: AngularFireAuth, private router: Router, private http: HttpClient) {     
  }
  
  createUser(user,password,maker) {
    console.log(user);
    this.auth.auth.createUserWithEmailAndPassword( user.email, password)
      .then( userCredential => {
        this.newUser = user;
        console.log(userCredential);
        userCredential.user.updateProfile( {
          displayName: user.firstName + ' ' + user.lastName
        });
        console.log(user);
        this.gebruiker = new Gebruiker(0,user.email,user.naam,userCredential.user.uid,user.rolID);
        console.log(this.gebruiker);
        this.postUserData(this.gebruiker, maker);
       
      })
      .catch( error => {
        this.eventAuthError.next(error);
      });
  }
  postUserData(gebruiker,maker){
    console.log(gebruiker)
    
    return this.http.post("https://localhost:44383/api/accounts", gebruiker).subscribe(result => {
      this.http.post("https://localhost:44383/api/maker", maker).subscribe();
      console.log("account made");
      this.router.navigate(['']);
    });
  }

  getUserState() {
    return this.auth.authState;
  }

  getRollen(): Observable<Rol[]>{
    return this.http.get<Rol[]>("https://localhost:44383/api/accounts")
  }

  login( email: string, password: string) {
    this.auth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['']);
        }
      })
  }
  logout() {
    return this.auth.auth.signOut();
  }

}
