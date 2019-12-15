import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate  {
  
  isAdmin(): boolean{
    if(JSON.parse(localStorage.getItem('rolID')) == 1)
    {
      
      return true;
    }else {
      return false;
    }
  }

  canActivate():boolean{
    if(!this.isAdmin()){
      console.log('access denied');
      
      return false;
    }
    console.log("access granted");
    return true;
  }

}
