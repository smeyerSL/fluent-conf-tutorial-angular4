import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, ResponseOptions, Response } from '@angular/http';
import { MockBackend } from "@angular/http/testing";

import { StocksService } from './stocks.service';

let stocksService: StocksService;
let backend: MockBackend;

describe('StocksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StocksService,
        MockBackend,
        BaseRequestOptions, {
        provide: Http,
        useFactory: (backend, options) => new Http(backend, options),
        deps: [MockBackend, BaseRequestOptions]
      }],
      imports: [ HttpModule ]
    });

    stocksService = TestBed.get(StocksService);
    backend = TestBed.get(MockBackend);
  });

  it('should be created', inject([StocksService], (service: StocksService) => {
    expect(service).toBeTruthy();
  }));

  it('should have http', inject([ StocksService ], (service) => {
    expect(!!service.http).toEqual(true);
  }));

  it('should get the stocks', inject([ StocksService ], (service) => {
    expect(service.getStockSymbols().length).toEqual(5);
  }));

  it('should add a stock', inject([ StocksService ], (service) => {
    var num = service.getStockSymbols().length;
    expect(service.addStockSymbol('a').length).toEqual(num + 1);
  }));

  it('should remove a stock', inject([ StocksService ], (service) => {
    var num = service.getStockSymbols().length;
    expect(service.removeStockSymbol('a').length).toEqual(num - 1);
  }));

  it('should get values', fakeAsync(() => {
    let mockResponse = [{
      symbol: 'fb',
      lastTradePriceOnly: 10,
      change: 1,
      changeInPercent: 0.1

    }];

    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(mockResponse)
      }))
    });

    stocksService.loadStockValues().subscribe((response) => {
      tick();
      let stocks: any = response.json()
      expect(stocks.length).toBe(1);
      expect(stocks[0].symbol).toBe('fb');
    });
  }));

});
