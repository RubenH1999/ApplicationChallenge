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
  currentUser: any;
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
        this.ingebruiker = userCredential.user.uid;
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
    
    console.log(maker);
    console.log(bedrijf);
    gebruiker.authUID = this.ingebruiker;
    console.log(gebruiker)
    return this.http.post("https://localhost:44383/api/accounts", gebruiker).subscribe(result => {
      
      console.log(result['accountID']);
      bedrijf.accountID = result['accountID'];
      maker.accountID = result['accountID'];
      console.log(this.ingebruiker);
      console.log(bedrijf);
      if(result['rolID'] == 3){
        
        console.log("bedrijf word gepost");
        return this.http.post("https://localhost:44383/api/bedrijf", bedrijf).subscribe(result => {
          console.log("bedrijf posten success");
        });
      }
      if(result['rolID'] == 2){
        console.log("maker word gepost");
        
        console.log(maker);
        return this.http.post("https://localhost:44383/api/maker", maker).subscribe(result => {
          console.log("maker posten success");
        });
      }

    });
  }

  getUserState() {
    this.auth.auth.onAuthStateChanged(function(user){
      if(user){
        this.ingebruiker = user.uid;
        return(this.ingebruiker);
      }else{

        console.log("er is geen gebruker in gelogd");
      }

    })
  }

  
  login( email: string, password: string) {
    this.auth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['']);
          this.currentUser = userCredential.user.uid;
          
          console.log(this.currentUser)
        }
      })
  }
  logout() {
    return this.auth.auth.signOut();
  }

}
