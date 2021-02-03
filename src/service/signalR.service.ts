import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
// import { AnnouncementServiceProxy } from '../shared/service-proxies/service-proxies';
import { Subject, Observable } from 'rxjs';
import { AppSettings } from '../../src/AppSettings';
import { Announcement } from '../../src/core/modal/Announcement';
// import { LocalStorageService } from '../app/core/local-storage/local-storage.service';
export const AUTH_KEY = 'AUTH';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private announcement$: Subject<Announcement>;
  private connection: signalR.HubConnection;
 //  public totalUnread: number;
  private receivedAnouncementObject: Announcement = new Announcement();
  private recipientId:number;
  
    constructor(
      // private _announcementServiceProxy: AnnouncementServiceProxy,
      // private _localStorageService: LocalStorageService
    ) {
    this.announcement$ = new Subject<Announcement>();

    this.connection = new signalR.HubConnectionBuilder()
    .withUrl(AppSettings.API_ENDPOINT + "/signalRMobile")
    .build();

    this.connect();
  }

  public async connect() {
    try {
        await this.connection.start();
      } catch (err) {
        console.log(err);
        // setTimeout(() => this.connect(), 5000);
      } 

    this.connection.on('ReceiveMessage', (recipientId, message1) => {
      console.log(recipientId);
      console.log(message1);
      Object.assign(message1, {recipientId: recipientId});
      this.announcement$.next(message1);
    });
  }

  public retrieveMappedObject(): Observable<Announcement> {
    return this.announcement$;
  }

  public disconnect() {
    this.connection.stop();
  }
}
