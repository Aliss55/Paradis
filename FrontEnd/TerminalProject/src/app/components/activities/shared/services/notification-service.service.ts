import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public messageService: MessageService) { }
  public notifyError(message: string): void {
    this.messageService.clear();
    this.messageService.add({
      key: 'error',
      severity: 'error',
      detail: message,
    });
  }

  public notifySucess(message: string) {
    this.messageService.clear();
    this.messageService.add({
      key: 'success',
      severity: 'success',
      detail: message,
    });

  }
}
