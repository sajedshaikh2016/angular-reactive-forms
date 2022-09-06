import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export interface UserForm extends FormGroup<{
  username: FormControl<string>,
  firstName: FormControl<string>,
  lastName: FormControl<string>,
  age: FormControl<number | null>
}> { }

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BrowserAnimationsModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  form!: UserForm;

  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.nonNullable.group({
      username: this._formBuilder.nonNullable.control('sajuism'),
      firstName: this._formBuilder.nonNullable.control('Sajed'),
      lastName: this._formBuilder.nonNullable.control('Shaikh'),
      age: this._formBuilder.control(32),
    });
  }

  ngOnInit(): void {
    console.log(this.form);

  }

  loadFormHttp() {
    this.form.patchValue({
      age: 40,
      username: "Cocomelon",
      firstName: "Jo Jo",
      lastName: "Tom Tom"
    });
  }

  reset() {
    this.form.reset();
  }

}
