import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isMatch = true;
  constructor(private auth: AuthService, private router: Router) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(
      null,
      Validators.compose([Validators.email, Validators.required])
    ),
    password: new FormControl(null, Validators.minLength(4)),
  });

  ngOnInit(): void {
    if (this.auth.getStatus() === true) this.router.navigate(['home']);
  }

  handleLogin() {
    this.isMatch = true;
    this.auth
      .login(
        this.loginForm.controls['email'].value,
        this.loginForm.controls['password'].value
      )
      .subscribe(
        (value) => {
          if (value) this.router.navigate(['home']);
        },
        (error) => {
          console.log(error);
          this.isMatch = false;
          console.log(this.isMatch);
        }
      );
  }
}
