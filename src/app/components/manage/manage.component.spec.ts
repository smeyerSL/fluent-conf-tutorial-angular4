import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StocksService } from '../../services/stocks/stocks.service';
import { Manage } from './manage.component';

describe('Manage', () => {
  let component: Manage;
  let fixture: ComponentFixture<Manage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Manage ],
      imports: [ ReactiveFormsModule, HttpModule ],
      providers: [ StocksService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Manage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();

    expect(component.stockSymbols.length).toEqual(5);
    expect(!!component.stocksService).toEqual(true);
  });
});
