import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface GuestbookMessage {
  name: string;
  message: string;
  timestamp: Date;
}

const GUESTBOOK_STORAGE_KEY = 'wedding-guestbook-messages';

@Injectable({
  providedIn: 'root',
})
export class GuestbookService {
  private _messages = signal<GuestbookMessage[]>([]);
  public readonly messages = this._messages.asReadonly();
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    this.loadMessagesFromStorage();
    
    // Effect to save messages whenever they change
    effect(() => {
      this.saveMessagesToStorage(this._messages());
    });
  }

  private loadMessagesFromStorage(): void {
    if (this.isBrowser) {
      try {
        const storedMessages = localStorage.getItem(GUESTBOOK_STORAGE_KEY);
        if (storedMessages) {
          const parsedMessages: GuestbookMessage[] = JSON.parse(storedMessages).map((m: any) => ({
            ...m,
            timestamp: new Date(m.timestamp) // Revive date object
          }));
          this._messages.set(parsedMessages);
        } else {
            // If nothing in storage, add initial messages for demonstration
             this._messages.set([
                // { name: 'Friend A', message: 'Wishing you a lifetime of love and happiness!', timestamp: new Date() },
                // { name: 'Family Member B', message: 'So excited to celebrate with you both. Congratulations!', timestamp: new Date() },
            ]);
        }
      } catch (error) {
        console.error('Failed to load guestbook messages from localStorage', error);
         this._messages.set([]);
      }
    }
  }

  private saveMessagesToStorage(messages: GuestbookMessage[]): void {
    if (this.isBrowser) {
      try {
        localStorage.setItem(GUESTBOOK_STORAGE_KEY, JSON.stringify(messages));
      } catch (error) {
        console.error('Failed to save guestbook messages to localStorage', error);
      }
    }
  }

  addMessage(name: string, message: string): void {
    const newMessage: GuestbookMessage = {
      name,
      message,
      timestamp: new Date(),
    };
    this._messages.update(currentMessages => [...currentMessages, newMessage]);
  }
}
