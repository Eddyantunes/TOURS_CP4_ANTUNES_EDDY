import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Artiste } from '../models/artiste.model';

@Injectable({
  providedIn: 'root'
})
export class ArtisteService {

  constructor(private http: HttpClient) { }

  public api = `${environment.apiUrl}`;

  public getartiste(): Observable<Artiste> {
    return this.http.get(`${this.api}/artiste`).pipe(
      map((artistes: any) => { return artistes as Artiste;
      })
      );
  }

  public createartiste(artisteForm: Artiste): Observable <Artiste> {
    return this.http.post<Artiste>(`${this.api}/artiste`, artisteForm);
  }

  public deleteartiste(id: number): Observable<Artiste> {
    return this.http.delete(`${this.api}/artiste/${id}`).pipe(
      map((artiste: any) => {
        return  artiste as Artiste;
      }),
    );
  }

  public updateartiste(id: string, artisteForm: Artiste): Observable<Artiste> {
    return this.http.put<Artiste>(`${this.api}/artiste/${id}`, artisteForm);
  }

}
