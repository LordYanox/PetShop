import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptionsComponent } from './views/adoptions/adoptions.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { DonationsComponent } from './views/donations/donations.component';
import { HomeComponent } from './views/home/home.component';
import { PutAdoptionComponent } from './views/put-adoption/put-adoption.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'Adoptions', component: AdoptionsComponent},
  { path: 'PutAdoption', component: PutAdoptionComponent},
  { path: 'ContacUs', component: ContactUsComponent},
  { path: 'Donations', component: DonationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
