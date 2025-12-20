import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { AuthService, LoginRequest } from '../data-access/auth.api';
import { UILogin } from '../UI/login/login';

@Component({
  selector: 'lib-feature-login',
  standalone: true,
  imports: [ReactiveFormsModule, UILogin],
  templateUrl: './feature-login.html',
  styleUrl: './feature-login.css'
})
export class FeatureLogin {
  #api = inject(AuthService);

  form = new FormGroup({
    emailId: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  onSubmit(payload: LoginRequest): void {

    this.#api.login(payload).pipe(
      tap(v => console.log(v))
    ).subscribe()
  }
}
