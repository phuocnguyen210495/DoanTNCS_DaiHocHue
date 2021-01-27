import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  // Data login mockup
  login_mockup = {
    'studentCode'     : '42.01.104.122',
    'studentPassword' : 'Buiphuongdung123'
  }

  // Check if login info is true
  login_failed : any;

  // Error messeage
  error_msg = '';

  login_info = {
    'studentCode'     : '',
    'studentPassword' : ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if ( this.checkLoginInfo() ){
      this.login_failed = false;
      this.error_msg = 'Thông tin đăng nhập không chính xác.Vui lòng thử lại';
      console.log("Login submit result: PASS");
    }else{
      this.login_failed = true;
      this.error_msg = ''; 
      console.log("Login submit result: NOT PASS");
    }
    console.log(this.login_info)
  }

  checkLoginInfo(){
    if (this.login_info.studentCode === this.login_mockup.studentCode && this.login_info.studentPassword === this.login_mockup.studentPassword){ return true }
    else { return false }
  }  
}
