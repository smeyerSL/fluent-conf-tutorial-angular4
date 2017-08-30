import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { Summary } from './summary.component';

describe('Summary', () => {
  let component: Summary;
  let fixture: ComponentFixture<Summary>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Summary ],
      imports: [HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Summary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should detect if positive or negative', () => {
    component.stock = {
      symbol: 'abc',
      lastTradePriceOnly: 10,
      change: -1,
      changeInPercent: 0.1
    };

    fixture.detectChanges();
    expect(component.isNegative()).toBe(true);
    expect(component.isPositive()).toBe(false);

    // Test isPositive
    component.stock.change = 1;
    fixture.detectChanges();
    expect(component.isNegative()).toBe(false);
    expect(component.isPositive()).toBe(true);
  });

});
