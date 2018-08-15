import { Component } from '@angular/core';
import { MessagingService } from './shared/messaging.service';
import { SwUpdate } from '@angular/service-worker';
import { LocalStorageService } from './shared/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Charla PWA - Última noticias';
  message;

  constructor(private updates: SwUpdate, private messagingService: MessagingService, 
              private localStorageService: LocalStorageService) { 
      updates.activateUpdate().then(() => {
        //document.location.reload();
      });
  }

  ngOnInit() {
    var userId =this.localStorageService.getFromLocalStorage("userId");
    if (!userId){
      var random = Math.floor(Math.random()*(100000-1+1)+1);
      userId = 'user001' + random;
      this.localStorageService.storeOnLocalStorage("userId");
    }
    this.messagingService.requestPermission(userId);
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }
}
