import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;
  public positiveChange: boolean;
  public favorite: boolean; // initially instantiated as 'false'

  constructor() { }

  ngOnInit() {
    this.name = "APPLE";
    this.code = 'AAPL';
    this.price = 120.65;
    this.previousPrice = 101.55;

    // check if current price is greater than or equal to previous price
    this.positiveChange = this.price >= this.previousPrice;
  }

  toggleFavorite() {
    console.log("Toggling state for this stock.");
    this.favorite = !this.favorite;
  }

}
