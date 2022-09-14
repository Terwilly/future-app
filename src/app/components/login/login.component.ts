import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    this.authService.login().subscribe((res) => {
      const user = res.find((a: any) => {
        return (
          a.email === this.loginForm.value.email &&
          a.password === this.loginForm.value.password
        );
      });
      if (user) {
        alert('Vous etes bien connecte');
        this.loginForm.reset();
        this.authService.islogIn = true;
        this.router.navigateByUrl('/cart/commande');
      } else {
        alert('user not found');
      }
    });
  }
}
