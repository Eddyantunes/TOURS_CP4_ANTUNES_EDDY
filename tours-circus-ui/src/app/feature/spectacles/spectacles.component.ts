import { Component, OnInit } from '@angular/core';
import { Spectacle } from 'src/app/common/models/spectacle.model';
import { SpectacleService } from 'src/app/common/services/spectacles.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-spectacles',
  templateUrl: './spectacles.component.html',
  styleUrls: ['./spectacles.component.scss']
})
export class SpectaclesComponent implements OnInit {

  public id: any;
  public spectacles;

  form = new FormGroup({
    id: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    images: new FormControl('', Validators.required),
    artiste_id: new FormControl('', Validators.required),
  });
  constructor(private service: SpectacleService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('id');
      if (this.id) {
        this.service.getOnespectacle(this.id).subscribe(
          (spectacles: Spectacle) => {
            this.spectacles = spectacles;
            this.form.patchValue(spectacles);
          },
        );
      }
    });
  }
  onSubmit() {
    if (this.id) {
      this.service.updatespectacle(this.spectacles.id, this.form.value).subscribe(
        (spectacles: Spectacle) => {
          this.form.patchValue(spectacles);
          this.router.navigate(['']);
          this.toastr.success('L\'spectacles a bien été modifié', 'Modification', {
            positionClass: 'toast-bottom-full-width',
          });
        });
    } else {
      this.service.createspectacle(this.form.value).subscribe(
        (spectacles: Spectacle) => {
          this.form.patchValue(spectacles);
          this.router.navigate(['']);
          this.toastr.success('L\'spectacles a bien été créé', 'Création', {
            positionClass: 'toast-bottom-full-width',
          });
        });
    }
  }
  public deletespectacles() {
    const result = confirm('Confirmez-vous la suppression de l\'spectacles ?');
    if (result) {
      this.service.deletespectacle(this.id)
        .subscribe(() => {
          this.router.navigate(['']);
          this.toastr.warning('L\'spectacles a bien été supprimé', 'Suppression', {
            positionClass: 'toast-bottom-full-width',
          });
        });
    }
  }
}
