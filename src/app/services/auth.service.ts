import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = true;

  constructor() { }

  LoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
