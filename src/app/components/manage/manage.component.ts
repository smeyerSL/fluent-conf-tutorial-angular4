import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StocksService } from '../../services/stocks/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
  providers: [StocksService],
})
export class Manage implements OnInit {
  stockSymbols: Array<string>;
  stocksService: StocksService;
  addStockForm: FormGroup;

  constructor(stocksService: StocksService, formBuilder: FormBuilder) {
    this.stocksService = stocksService;
    this.stockSymbols = stocksService.getStockSymbols();

    this.addStockForm = formBuilder.group({
      stock: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  remove(stockSymbol: string) {
    this.stockSymbols = this.stocksService.removeStockSymbol(stockSymbol);
  }

  addStockSymbol() {
    this.stockSymbols = this.stocksService.addStockSymbol(this.addStockForm.value.stock);
  }
}
