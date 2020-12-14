import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wine } from '../model';
import { WineService } from '../wine.service';

@Component({
  selector: 'app-wine-page',
  templateUrl: './wine-page.component.html',
  styleUrls: ['./wine-page.component.css']
})
export class WinePageComponent implements OnInit {

  wine: Wine = {
    id: '',
    title: '',
    price: 0,
    country: '',
    description: '',
    points: 0,
    province: '',
    taster: '',
    variety: '',
    winery: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private serv: WineService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.serv.getWineInfo(id)
      .then((result) => {
        this.wine = result;
      })
      .catch((error) => {
        console.error('[ERROR]: ', error);
      })
  }

}
