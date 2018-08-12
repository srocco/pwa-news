import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatToolbarModule, MatCardModule, MatListModule } from '@angular/material';
import { NewsComponent } from './news/news.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
