import { Component } from '@angular/core';
import { PushNotificationsService } from './core/services/push-notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: any = 'firebase-ang8';

  constructor(private pushService: PushNotificationsService) {
    this.pushService.requestPermission()
    this.pushService.receiveMessage()
    this.message = this.pushService.currentMessage
  }


}
