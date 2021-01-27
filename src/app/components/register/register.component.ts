import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // Icons
  eyeIcon = faEye;
  eyeSlashIcon = faEyeSlash;

  // Texts
  page_title = "Đăng ký";
  
  // Form input names
  register_form = new FormGroup({
    studentCode: new FormControl(),
    studentPassword: new FormControl(),
    confirmPassword: new FormControl(),
    fullName: new FormControl(),
    firstName: new FormControl(),
    middleName: new FormControl(),
    lastName: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    capchaCode: new FormControl()
  });

  // Hide password
  hidePassword = true;
  hideConfirmPassword = true;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['register-success']);
  }
}
