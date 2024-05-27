import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl("" ),
  //   price: new FormControl(0 ),
  //   inStorage: new FormControl(0 ),
  // })

  isValid(field: string) {
    return this.myFrom.controls[field].errors
    && this.myFrom.controls[field].touched
  }

  isValidInArray(formArray: FormArray, index: number) {
    return formArray.controls[index].errors
    && formArray.controls[index].touched
  }


  public myFrom: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }

  onSave() {
    this.myFrom.markAllAsTouched()
    if (this.myFrom.valid) {
      console.log(this.myFrom.value)
      this.myFrom.reset({ price: 0, inStorage: 0 })
    }
  }


}
