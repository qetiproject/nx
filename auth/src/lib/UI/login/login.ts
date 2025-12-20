import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginRequest } from '../../data-access/auth.api';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class UILogin {
  @Input() form!: FormGroup;
  @Output() submitForm = new EventEmitter<LoginRequest>();

  onSubmit(): void {
    this.submitForm.emit(this.form.getRawValue());
  }
}
