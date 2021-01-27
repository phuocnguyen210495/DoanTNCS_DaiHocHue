import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss']
})
export class RegisterSuccessComponent implements OnInit {
  msg__success       = "Đăng ký thành công !";
  msg__check_email   = "Vui lòng kiểm tra email để xem thông tin tài khoản."
  btn__back_to_home  = "Quay về trang chủ";
  btn__go_to_account = "Đi đến tài khoản";

  constructor() { }

  ngOnInit(): void {
  }

}
