import { Component, OnInit } from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Apple Inc.', 'AAPL', 120.65, 100.72);
  }

  toggleFavorite(event) {
    console.log('Toggling state for this stock.', event);
    this.stock.favorite = !this.stock.favorite;
  }

}
