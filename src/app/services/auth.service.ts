import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable, throwError, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  isLoggedIn = false;
  getStatus() {
    return this.isLoggedIn;
  }

  login(email: string, password: string): Observable<boolean> {
    if (email === 'adhyyan321@gmail.com' && password === 'root') {
      this.isLoggedIn = true;
      return of(true);
    }
    return throwError(new Error('failed to login'));
  }
}
