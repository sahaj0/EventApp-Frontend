import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from './login/loginService/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private login:LoginService,private rou:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
    if(this.login.isLoggedIn() ){

      return true;
    }
    else{
      // Swal.fire("YOU HAVE NO RIGHTS TO ACCESS THIS PAGE");

      Swal.fire({
        text: 'YOU HAVE NO RIGHTS TO ACCESS THIS PAGE WITHOUT LOGIN',
        icon: 'warning',
        showCancelButton: true,

    })
    this.rou.navigate(['/login']);

    

      // Swal.clickDeny();
    }
     return false;
  }
  
}
