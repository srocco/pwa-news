import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatToolbarModule, MatCardModule, MatListModule } from '@angular/material';
import { NewsComponent } from './news/news.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MessagingService } from './shared/messaging.service';
import { AsyncPipe } from '@angular/common';
import { StorageServiceModule } from 'angular-webstorage-service';
import { LocalStorageService } from './shared/local-storage.service';

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
    StorageServiceModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),

    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production },
  ) 
  ],
  providers: [MessagingService, LocalStorageService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
