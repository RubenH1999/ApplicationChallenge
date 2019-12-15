import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router){}

  isAuthenticated():boolean{
    if (localStorage.getItem('authUID')){
      return true;
    }
    else{
      return false;
    }
  }
  
  canActivate(): boolean{
    if(!this.isAuthenticated()){
      console.log('access denied');
      this.router.navigate(['login']);
      return false;
    }
    console.log("access granted");
    return true;
  }
    

  
}