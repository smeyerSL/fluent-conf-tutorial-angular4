import { Component, OnInit } from '@angular/core';
import { StockInterface } from '../../services/stocks/stocks.service'

@Component({
  selector: 'app-summary',
  templateUrl: 'summary.component.html',
  styleUrls: ['summary.component.css'],
  inputs: ['stock']
})
export class Summary implements OnInit {
  stock: StockInterface;

  ngOnInit() {
  }

  isPositive() {
    return this.stock && this.stock.change > 0;
  }

  isNegative() {
    return this.stock && this.stock.change <= 0;
  }

}
