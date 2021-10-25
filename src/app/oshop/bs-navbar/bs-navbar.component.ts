import { AppUser } from '../models/app-user';
import { AuthService } from '../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { app } from 'firebase';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser;

  constructor(private auth: AuthService) { 

    //  this.appUser.email = 'casolanki@yahoo.com'
    //  this.appUser.name = 'chirag'
    //  this.appUser.isAdmin = true

    auth.appUser$.subscribe(appUser=>
        this.appUser =
        appUser);
    console.log('appUser  ' +this.appUser);
  }

  logout() {
    this.auth.logout();
  }

}
