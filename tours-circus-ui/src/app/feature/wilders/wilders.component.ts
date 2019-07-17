import { Component, OnInit } from '@angular/core';
import { Artiste } from 'src/app/common/models/artiste.model';
import { ArtisteService } from 'src/app/common/services/artiste.service';

@Component({
  selector: 'app-wilders',
  templateUrl: './wilders.component.html',
  styleUrls: ['./wilders.component.scss']
})
export class WildersComponent implements OnInit {

  public artiste;

  constructor(private service: ArtisteService) { }

  ngOnInit() {
    this.service.getartiste().subscribe((artiste: Artiste) => {
      this.artiste = artiste;
    });
  }
}
