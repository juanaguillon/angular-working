import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DetallesComponent } from './detalles/detalles.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';

import { environment } from '../environments/environment';

import { LugaresService } from './shared/services/lugares.service';

@NgModule({
  declarations: [
    AppComponent,
    DetallesComponent,
    LugaresComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp( environment.firebase, 'angular-working' ),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
