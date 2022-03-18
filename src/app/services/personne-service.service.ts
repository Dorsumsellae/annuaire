import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root',
})
export class PersonneServiceService {
  personnesUrl = 'http://localhost:3000/api/Personnes';
  private httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getPersonne(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.personnesUrl);
  }

  ajouterPersonne(personne: Personne): Observable<any> {
    return this.http.post(this.personnesUrl, personne, this.httpOptions);
  }

  supprimerPersonne(personne: Personne) {
    return this.http.delete(this.personnesUrl + '/' + personne.id, {
      body: personne,
    });
  }

  updatePersonne(personne: Personne) {
    return this.http.post(
      `${this.personnesUrl}/${personne.id}/replace`,
      personne,
      this.httpOptions
    );
  }

  countPersonne(): Observable<any> {
    return this.http.get<Personne>(this.personnesUrl + '/count');
  }
}
