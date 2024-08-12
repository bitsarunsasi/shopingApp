import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  formSignin!: FormGroup;

  constructor(
    private router: Router
  ) { }
  ngOnInit() {
    this.initForm()
  }
  initForm() {
    console.log('sign in init');
    this.formSignin = new FormGroup({
      user_email: new FormControl('', [Validators.required, Validators.email]),
      user_password: new FormControl('', Validators.required)
    });
  }
  signIn() {
    if (this.formSignin.invalid) { return }
    const log_mail = this.formSignin.value.user_email;
    const log_password = this.formSignin.value.user_password;
    if (log_mail === 'arun@gmail.com' && log_password === 'arun123') {
      alert('successfull login');
      this.router.navigateByUrl('/products');
    } else {
      alert("Invalid Login");
      this.formSignin.reset();
    }
  }
}
