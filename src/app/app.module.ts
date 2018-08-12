import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatToolbarModule, MatCardModule, MatListModule } from '@angular/material';
import { NewsComponent } from './news/news.component'

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
