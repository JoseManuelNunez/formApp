import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  constructor() { }
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public cantBeStrider = (control: FormControl) => {

    const value: string = control.value.trim().toLowerCase()

    if (value === 'strider') {
      return {
        noStrider: true
      }
    }

    return null
  }

  public isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched
  }

  public igualesContraseñas(pass1: string, pass2: string) {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const pass1Value = formGroup.get(pass1)
      const pass2Value = formGroup.get(pass2)

      if (pass1Value !== pass2Value) {
        formGroup.get(pass2)?.setErrors({ notEqueal: true })
        return { notEqual: true }
      }

      formGroup.get(pass2)?.setErrors(null)
      return null
    }
  }
}
