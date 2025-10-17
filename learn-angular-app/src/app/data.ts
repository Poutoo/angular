import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSercice {
  getGreeting(): string {
    return `Bonjour, il est ${new Date().toLocaleTimeString()}`;
  }

  getItems(): string[] {
    return ['Poire', 'Cerise', 'Raisin'];
  }
}
