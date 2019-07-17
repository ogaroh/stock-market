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

  constructor() { }

  ngOnInit() {
    this.name = "APPLE";
    this.code = 'AAPL';
    this.price = 120.65;
    this.previousPrice = 101.55;
    this.positiveChange = this.price >= this.previousPrice;
  }

}
