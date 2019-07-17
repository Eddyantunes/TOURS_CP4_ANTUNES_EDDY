import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WildersComponent } from './feature/wilders/wilders.component';
import { HomepageComponent } from './feature/homepage/homepage.component';
import { PanierComponent } from './feature/panier/panier.component';
import { SpectaclesComponent } from '../app/feature/spectacles/spectacles.component';

const routes: Routes = [
    { path: '', component: HomepageComponent},
    { path: 'wilders', component: WildersComponent },
    { path: 'reservation', component: PanierComponent},
    { path: ':id/edit', component: SpectaclesComponent},
    { path: 'edit', component: SpectaclesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
