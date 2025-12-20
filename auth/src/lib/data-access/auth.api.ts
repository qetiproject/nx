// libs/auth/data-access/auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface LoginRequest {
  emailId: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  login(payload: LoginRequest): Observable<any> {
    return this.http.post<LoginRequest>('https://api.freeprojectapi.com/api/UserApp/login', payload);
  }
}
