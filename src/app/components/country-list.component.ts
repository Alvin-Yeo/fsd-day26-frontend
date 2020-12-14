import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WineService } from '../wine.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  list: string[];

  constructor(
    private serv: WineService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serv.getCountryList()
      .then((result) => {
        this.list = result;
        this.list = this.list.slice(1);
      })
      .catch((error) => {
        console.error('[ERROR]: ', error);
      });
  }

  navigate(country: string) {
    this.router.navigate(['/', 'countries', country]);
  }
}
