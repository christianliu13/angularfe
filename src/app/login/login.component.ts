import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { UserLogin } from '../model/userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  }, {updateOn:'submit'});

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) { }


  onSubmit(): void {
    if (!this.loginForm.invalid){
      const userLogin : UserLogin = new UserLogin(this.loginForm.value.email, this.loginForm.value.password);
      if (this.authenticationService.authenticate(userLogin)){
        alert("You are logged in!");
      } else {
        alert("Username or Password does not match our records.");
      }
    }
  }

  ngOnInit(): void {
  }

}
