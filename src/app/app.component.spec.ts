import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {Dashboard} from "./components/dashboard/dashboard.component";
import {Summary} from "./components/summary/summary.component";
import {Manage} from "./components/manage/manage.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, Dashboard, Summary, Manage
      ],
      imports: [
        RouterModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
