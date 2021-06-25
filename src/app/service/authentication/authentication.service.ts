import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new UserLogin("admin@email.com","admin123");
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(userLogin: UserLogin): boolean {
    if (this.checkCredentials(userLogin)){
      this.isAuthenticated = true;
      this.router.navigate(['/form']);
      return true;
    }
    return false;
  }

  private checkCredentials(userLogin: UserLogin): boolean {
    return this.checkEmail(userLogin.getEmail()) && this.checkPassword(userLogin.getPassword())
  }

  private checkEmail(email: string): boolean {
    return email === this.mockedUser.getEmail();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockedUser.getPassword();
  }

}
