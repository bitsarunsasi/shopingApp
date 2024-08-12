import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  formSignup!: FormGroup;

  constructor() { }
  ngOnInit() {
    this.intForm();
  }
  intForm() {
    this.formSignup = new FormGroup({
      user_name: new FormControl('', [Validators.required]),
      user_email: new FormControl('', [Validators.required, Validators.email]),
      user_password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      user_confirm_password: new FormControl('', [Validators.required])
    })
  }
  signUp() {
    if (this.formSignup.invalid) {
      return
    }
    console.log('sign');
    console.log(this.formSignup.value)
  }
}
