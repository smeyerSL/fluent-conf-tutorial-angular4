import { Component } from '@angular/core';
import { StocksService } from "./services/stocks/stocks.service";
import { Dashboard } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StocksService],
  entryComponents: [Dashboard]
})
export class AppComponent {
}
