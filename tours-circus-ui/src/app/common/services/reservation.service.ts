import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  public api = `${environment.apiUrl}`;

  public getreservation(): Observable<Reservation> {
    return this.http.get(`${this.api}/reservation`).pipe(
      map((reservations: any) => { return reservations as Reservation;
      })
      );
  }

  public createreservation(reservationForm: Reservation): Observable <Reservation> {
    return this.http.post<Reservation>(`${this.api}/reservation`, reservationForm);
  }

  public deletereservation(id: number): Observable<Reservation> {
    return this.http.delete(`${this.api}/reservation/${id}`).pipe(
      map((reservation: any) => {
        return  reservation as Reservation;
      }),
    );
  }

  public updatereservation(id: string, reservationForm: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.api}/reservation/${id}`, reservationForm);
  }

}
