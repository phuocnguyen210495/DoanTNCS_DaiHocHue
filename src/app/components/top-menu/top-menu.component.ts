import { Component, OnInit } from '@angular/core';
import { faSearch, faHome, faPhoneAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const LINKS = [
  { 'display' : 'Trang chủ',  'aria_label' : 'Home page',           'link' : '/dashboard'  },
  { 'display' : 'Giới thiệu', 'aria_label' : 'Introduce page',      'link' : '/introduce'  },
  { 'display' : 'Hoạt động',  'aria_label' : 'Activites page',      'link' : '/activities' },
  { 'display' : 'Tin nội bộ', 'aria_label' : 'Internal posts page', 'link' : '/internal'   },
  { 'display' : 'Câu lạc bộ', 'aria_label' : 'Club posts page',     'link' : '/test'       },
  { 'display' : 'Đội',        'aria_label' : 'Team posts page',     'link' : '/test'       },
  { 'display' : 'Ban',        'aria_label' : 'Board posts page',    'link' : '/test'       },
  { 'display' : 'Liên hệ',    'aria_label' : 'Contact page',        'link' : '/contact'    },
  { 'display' : 'Đăng ký',    'aria_label' : 'Register page',       'link' : '/register'   },
  { 'display' : 'Tài khoản',  'aria_label' : 'Account page',        'link' : '/account'    },
]


@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})


export class TopMenuComponent implements OnInit {
  // Icons
  searchIcon = faSearch;
  homeIcon = faHome;
  phoneIcon = faPhone;
  
  // Menu link's text
  user_firstname = "Quân";
  menu_link__text__homepage   = "Trang chủ";
  menu_link__text__introduce  = "Giới thiệu";
  menu_link__text__activities = "Quản lý hoạt động";
  menu_link__text__faculty    = "Đoàn khoa Du lịch";
  menu_link__text__internal   = "Thông tin nội bộ";
  menu_link__text__contact    = "Liên hệ";
  menu_link__text__login      = "Đăng nhập";
  menu_link__text__register   = "Đăng ký";
  menu_link__text__account    = "Xin chào, " + this.user_firstname + " !";

  // Input
  menu_input__placeholder = "Nhập từ khóa";
  menu_input__aria_label = "Tìm kiếm";

  menu_items = LINKS;

  constructor() { }
  ngOnInit(): void {
  }
}
