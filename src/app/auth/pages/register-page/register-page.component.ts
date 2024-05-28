import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as custonValidators from '../../../shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidator } from '../../../shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.vs.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [new EmailValidator()]],
    username: ['', [Validators.required, this.vs.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],

  }, {
    Validators: [
      this.vs.igualesContraseñas('password', 'password2')
    ]
  })

  constructor (
    private fb: FormBuilder,
    private vs: ValidatorsService
  ) {}

  isValid(field: string) {
    return this.vs.isValidField(this.myForm, field)
  }

  onSubmit() {
    this.myForm.markAllAsTouched()
  }

}
