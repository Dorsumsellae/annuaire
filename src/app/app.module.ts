import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonneAjouterComponent } from './personne-ajouter/personne-ajouter.component';
import { MenuComponent } from './menu/menu.component';
import { PersonneListerComponent } from './personne-lister/personne-lister.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { PersonneDetailsComponent } from './personne-details/personne-details.component';
import { UpperfirstPipe } from './pipes/upperfirst.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonneAjouterComponent,
    MenuComponent,
    PersonneListerComponent,
    AproposComponent,
    ContactComponent,
    PersonneDetailsComponent,
    UpperfirstPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
