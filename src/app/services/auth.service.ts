import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  getStatus() {
    return localStorage.getItem('loginStatus');
  }

  login(email: string, password: string): Observable<boolean> {
    if (email === 'adhyyan321@gmail.com' && password === 'root') {
      localStorage.setItem('loginStatus', 'true');
      return of(true);
    }
    return throwError(new Error('failed to login'));
  }
}
