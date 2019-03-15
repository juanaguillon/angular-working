import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DetallesComponent } from './detalles/detalles.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearComponent } from './crear/crear.component';

import { environment } from '../environments/environment';

import { LugaresService } from './shared/services/lugares.service';
import { LinkifyPipe } from './shared/pipes/linkify.pipe';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    DetallesComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifyPipe,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp( environment.firebase, 'angular-working' ),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
