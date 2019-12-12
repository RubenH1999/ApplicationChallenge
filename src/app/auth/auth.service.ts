import { Injectable } from '@angular/core';
import { FirebaseAuth } from '@angular/fire';
import { HttpClient} from '@angular/common/http'
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Gebruiker } from '../models/gebruiker.model';
import { Rol } from '../models/rol.model';
import { Maker } from '../models/maker.model';
import { Bedrijf } from '../models/bedrijf.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  newUser: any;  
  gebAuth: any;
  ingebruiker: any;
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  constructor(private auth: AngularFireAuth, private router: Router, private http: HttpClient) {     
  }
  
  createUser(user,password,maker, bedrijf) {
    console.log(user);
    this.auth.auth.createUserWithEmailAndPassword( user.email, password)
      .then( userCredential => {
        this.newUser = user;
        console.log(userCredential);
        userCredential.user.updateProfile( {
          displayName: user.firstName + ' ' + user.lastName
        });
        console.log(user);
        
        this.postUserData(user, maker ,bedrijf);
       
      })
      .catch( error => {
        this.eventAuthError.next(error);
      });
  }
  postUserData(gebruiker, maker,bedrijf){
    console.log(gebruiker)
    console.log(maker);
    console.log(bedrijf);
    
    return this.http.post("https://localhost:44383/api/accounts", gebruiker).subscribe(result => {
      
      console.log(result['accountID']);
      bedrijf.accountID = result['accountID'];
      
      console.log(bedrijf);
      if(result['rolID'] == 3){
        console.log("bedrijf word gepost");
        return this.postBedrijf(bedrijf).subscribe(result => {
          console.log(bedrijf);
          this.router.navigate(['']);
        });
      }
      if(result['rolID'] == 2){
        return this.http.post("https://localhost:44383/api/maker", maker);
      }

    });
  }

  getUserState() {
    this.auth.auth.onAuthStateChanged(function(user){
      if(user){
        this.ingebruiker = user.uid;
        
      }else{

        console.log("er is geen gebruker in gelogd");
      }

    })
  }

  postBedrijf(bedrijf){
    console.log(bedrijf)
    return this.http.post("https://localhost:44383/api/bedrijf", bedrijf);
  }
  login( email: string, password: string) {
    this.auth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['']);
          this.gebAuth = userCredential.user.uid;
          console.log("welloe neef");
          console.log(this.gebAuth)
        }
      })
  }
  logout() {
    return this.auth.auth.signOut();
  }

}
