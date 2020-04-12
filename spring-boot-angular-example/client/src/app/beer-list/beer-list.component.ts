import { Component, OnInit } from '@angular/core';
import { BeerService, GiphyService } from '../shared';
import { NgForm } from '@angular/forms';
import { Beer } from '../models/beer-model';
import { MatButtonModule, MatListModule, MatToolbarModule } from '@angular/material';


@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
   providers: [BeerService, GiphyService]
})
export class BeerListComponent implements OnInit {
  beers: Array<any>;
  name: string;
  id: number;
  beer: Beer = {
    id: null,
    name: ""
  }

 constructor(private beerService: BeerService, private giphyService: GiphyService) { }

  ngOnInit() {
     this.beerService.getAll().subscribe(
      data => {
        this.beers = data;
        for (const beer of this.beers) {
          debugger;
          this.giphyService.get(beer.name).subscribe(url => beer.giphyUrl = url);
        }
      },
      error => console.log(error)
    )
  }


  createBeer(name: string): void{
    console.log('Component -> ', name);
     this.beerService.createBeer(name).subscribe(data => {
      console.log("Create Beer HTTP ---> ", data)
    });
  }

  updateBeer(id: number, name: string): void {
    this.beerService.updateBeer(id, {id, name}).subscribe(data => {
      console.log(data);
    });
  }

  deleteBeer(id: number): void{
    this.beerService.deleteBeer(id).subscribe(data => {
      console.log(data)
    });
  }

}
