import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wine } from '../model';
import { WineService } from '../wine.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {

  wineList: Wine[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private serv: WineService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const country = this.activatedRoute.snapshot.params['country'];
    
    this.serv.getWineList(country)
      .then((result) => {
        this.wineList = result;
      })
      .catch((error) => {
        console.error('[ERROR]: ', error);
      });
  }

  navigate(id: string) {
    this.router.navigate(['/', 'wine', id]);
  }
}
