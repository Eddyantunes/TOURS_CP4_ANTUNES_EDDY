import { Component, OnInit } from '@angular/core';
import { SpectacleService } from '../../common/services/spectacles.service';
import { Spectacle } from '../../common/models/spectacle.model';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public spectacles ;

  constructor(private service: SpectacleService) { }

  ngOnInit() {
    this.service.getspectacle().subscribe((spectacles: Spectacle) => {
      this.spectacles = spectacles;
    });
  }
}
