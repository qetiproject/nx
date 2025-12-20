import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { AuthService, LoginRequest } from '../data-access/auth.api';

@Component({
  selector: 'lib-feature-login',
  standalone: true,
  imports: [ReactiveFormsModule],
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

  onSubmit(): void {

    const payload: LoginRequest = {
      emailId: this.form.value.emailId || '',
      password: this.form.value.password || ''
    };

    // აქ შემდეგში ჩასვამ:
    this.#api.login(payload).pipe(
      tap(v => console.log(v))
    ).subscribe()
  }
}
