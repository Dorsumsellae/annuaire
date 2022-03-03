import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root',
})
export class PersonneServiceService {
  personnesUrl = 'http://localhost:3000/api/Personnes';
  constructor(private http: HttpClient) {}

  getPersonne(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.personnesUrl);
  }

  ajouterPersonne(personne: Personne): Observable<Personne> {
    return this.http.post<Personne>(this.personnesUrl, personne);
  }

  supprimerPersonne(personne: Personne): Observable<Personne> {
    return this.http.delete<Personne>(this.personnesUrl + '/' + personne.id, {
      body: personne,
    });
    //todo
    //this.personnes = this.personnes.filter((p) => p != personne);
  }
}
