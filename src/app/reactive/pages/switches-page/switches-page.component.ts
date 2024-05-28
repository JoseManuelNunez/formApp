import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndCOnditions: [false, Validators.requiredTrue]
  })

  public person = {
    gender: 'F',
    wantNotifications: true
  }

  constructor (private fb: FormBuilder) {}

  isValid(control:string) {
    return this.myForm.controls[control].errors && this.myForm.controls[control].touched
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }

  }

}
