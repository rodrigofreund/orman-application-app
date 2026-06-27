import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { CreateUserViewModel } from './create-user-view.model';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UserService } from '../user.service';

@Component({
  selector: 'om-new-user',
  imports: [ReactiveFormsModule, MatInputModule, MatIconModule, MatCheckboxModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.scss',
})
export class NewUser {

  private userService = inject(UserService);

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    document: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    number: new FormControl(''),
    complement: new FormControl(''),
    complement2: new FormControl(''),
    complement3: new FormControl(''),
    region: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    blocked: new FormControl(false, [Validators.required]),
    active: new FormControl(false, [Validators.required]),
  })

  onSubmit() {
    const formValues = this.form.value;
    
    const newUserModel : CreateUserViewModel = {
      name: formValues.name,
      surname: formValues.surname,
      email: formValues.email,
      document: formValues.document,
      address: [{
        street: formValues.street,
        number: formValues.number,
        complement: formValues.complement,
        complement2: formValues.complement2,
        complement3: formValues.complement3,
        region: formValues.region,
        postalCode: formValues.postalCode,
        state: formValues.state,
        city: formValues.city,
        country: formValues.country
      }],
      phone: formValues.phone,
      password: formValues.password,
      blocked: formValues.blocked,
      active: formValues.active,
      customProperties: ''
    };

    console.log(newUserModel);

    this.userService.createUser(newUserModel);

  }
}
