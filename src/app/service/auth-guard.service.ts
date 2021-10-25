import { AppUser } from '../oshop/models/app-user';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
 

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  
  canActivate(route, state: RouterStateSnapshot) {   
    return this.auth.user$.pipe(map((user) => {
      if (user) return true; 
      
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false; 
    }));
  }

}
