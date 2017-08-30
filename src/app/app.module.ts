import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Summary } from './components/summary/summary.component';
import { Dashboard } from './components/dashboard/dashboard.component';
import { Manage } from './components/manage/manage.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full'
  },
  {
    path: 'dash',
    component: Dashboard,
  },
  {
    path: 'manage',
    component: Manage
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Summary,
    Dashboard,
    Manage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
