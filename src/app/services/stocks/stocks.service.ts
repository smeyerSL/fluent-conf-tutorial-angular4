import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];

@Injectable()
export class StocksService {

  http: Http;
  private serviceUrl: string = 'http://angular2-in-action-api.herokuapp.com';

  constructor(http: Http) {
    this.http = http;
  }

  getStockSymbols():Array<string> {
    return stocks.slice(0);
  }

  addStockSymbol(stock: string):Array<string> {
    stocks.push(stock);
    return this.getStockSymbols();
  }

  removeStockSymbol(stock: string):Array<string> {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.getStockSymbols();
  }

  loadStockValues() {
    return this.http.get(this.serviceUrl + '/stocks/snapshot?symbols=' + stocks.join());
  }

}
