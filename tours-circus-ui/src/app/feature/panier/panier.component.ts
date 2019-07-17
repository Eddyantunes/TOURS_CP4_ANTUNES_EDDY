import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/common/models/reservation.model';
import { ReservationService } from 'src/app/common/services/reservation.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  public reservation;

  constructor(private service: ReservationService) { }

  ngOnInit() {
    this.service.getreservation().subscribe((reservation: Reservation) => {
      this.reservation = reservation;
    });
  }
}
