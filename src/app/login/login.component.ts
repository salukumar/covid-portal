import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormControl!: FormGroup;
  

  constructor(public formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginFormControl = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }
  get getControl(){ console.log(this.loginFormControl.controls)
    return this.loginFormControl.controls;
  }

  submitLogin() {
    this.router.navigate(["/dashboard"])
    return true;
  }

}
