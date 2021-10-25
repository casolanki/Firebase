import { Observable } from 'rxjs';
import { AppUser } from '../oshop/models/app-user';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'; 

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }
  save(user: firebase.User) {
    this.db.object('/users/').update({
      name: user.displayName, 
      email: user.email 
    }); 
  }

  get(uid: string) : AngularFireList<AppUser>{     
    return this.db.list('/users/' + uid);
    
  }
}
