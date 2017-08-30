import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from '../../services/stocks/stocks.service';
import { Summary } from '../summary/summary.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [StocksService],
  entryComponents: [Summary]
})
export class Dashboard implements OnInit {
  stocks: Array<StockInterface>;
  constructor(stocksService: StocksService) {
    stocksService.loadStockValues().subscribe(response => {
      this.stocks = response.json();
    });
  }

  ngOnInit() {
  }

}
