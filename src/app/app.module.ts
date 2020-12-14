import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountryListComponent } from './components/country-list.component';
import { CountryPageComponent } from './components/country-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WineService } from './wine.service';
import { WinePageComponent } from './components/wine-page.component';

const ROUTES: Routes = [
  { path: '', component: CountryListComponent },
  { path: 'countries/:country', component: CountryPageComponent },
  { path: 'wine/:id', component: WinePageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryPageComponent,
    WinePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [WineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
