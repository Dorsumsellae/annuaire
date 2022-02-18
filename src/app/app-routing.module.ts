import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PersonneAjouterComponent } from './personne-ajouter/personne-ajouter.component';
import { PersonneListerComponent } from './personne-lister/personne-lister.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ajouter-personne', component: PersonneAjouterComponent },
  { path: 'lister-personnes', component: PersonneListerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'apropos', component: AproposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
