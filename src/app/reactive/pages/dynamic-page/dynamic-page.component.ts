import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.formBuilder.array([
      ['BloodBorne', Validators.required],
      ["God of War", Validators.required]
    ])

  })

  public newFavorite: FormControl = new FormControl('', [Validators.required])

  constructor(
    private formBuilder: FormBuilder
   ) {}

   get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray
   }

   isValid(field: string) {
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched
  }

  isValidInArray(formArray: FormArray, index: number) {
    return formArray.controls[index].errors
    && formArray.controls[index].touched
  }

  onDelete(i: number) {
    this.favoriteGames.removeAt(i)

  }

  onAddToFavorite(): void {
    if (this.newFavorite.invalid) return
    const newGame = this.newFavorite.value

    this.favoriteGames.push(
      this.formBuilder.control( newGame, Validators.required )
    )

    this.newFavorite.reset()
  }

   onSubmit(): void {

    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }

    console.log(this.myForm.value)
    this.myForm.reset()
   }

}
