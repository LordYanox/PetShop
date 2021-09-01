import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { AdoptionsComponent } from './views/adoptions/adoptions.component';
import { DonationsComponent } from './views/donations/donations.component';
import { PutAdoptionComponent } from './views/put-adoption/put-adoption.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactUsComponent,
    AdoptionsComponent,
    DonationsComponent,
    PutAdoptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
