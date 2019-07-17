import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Spectacle } from '../models/spectacle.model';

@Injectable({
  providedIn: 'root'
})
export class SpectacleService {

  constructor(private http: HttpClient) { }

  public api = `${environment.apiUrl}`;

  public getspectacle(): Observable<Spectacle> {
    return this.http.get(`${this.api}/spectacles`).pipe(
      map((spectacles: any) => { return spectacles as Spectacle;
      })
      );
  }

  public getOnespectacle(id: number): Observable<Spectacle> {
    return this.http.get(`${this.api}/spectacles/${id}`).pipe(
      map((spectacles: any) => { return spectacles as Spectacle;
      })
      );
  }

  public createspectacle(form: Spectacle): Observable <Spectacle> {
    return this.http.post<Spectacle>(`${this.api}/spectacles`, form);
  }

  public deletespectacle(id: number): Observable<Spectacle> {
    return this.http.delete(`${this.api}/spectacles/${id}`).pipe(
      map((spectacles: any) => {
        return  spectacles as Spectacle;
      }),
    );
  }

  public updatespectacle(id: string, form: Spectacle): Observable<Spectacle> {
    return this.http.put<Spectacle>(`${this.api}/spectacles/${id}`, form);
  }

}
