import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { CloudFirestoreComponent } from './firebase/cloud-firestore/cloud-firestore.component';
import { RealTimeDatabaseComponent } from './firebase/real-time-database/real-time-database.component';
import { BsNavbarComponent } from './oshop/bs-navbar/bs-navbar.component';
import { CheckOutComponent } from './oshop/check-out/check-out.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './oshop/home/home.component';
import { LoginComponent } from './oshop/login/login.component';
import { AdminAuthGuard } from './service/admin-auth-guard.service';
import { AuthGuard } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    RealTimeDatabaseComponent, 
    CloudFirestoreComponent,
    BsNavbarComponent,
    LoginComponent,
    CheckOutComponent,
    HomeComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
 //   AngularFireAuth,
    AngularFirestoreModule,     
   // NgbModule.forRoot(),
    RouterModule.forRoot([     
      { path: 'home', component: HomeComponent }, 
      { path: 'login', component: LoginComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
    ])
  ],
  providers: [
    AngularFireModule,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    AngularFireAuth    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
