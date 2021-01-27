import { Component, OnInit } from '@angular/core';

// Data mockup
const POSTS = [
  { title: 'QL hồ sơ Đoàn viên',          link: 'manager-members/list'},
  { title: 'QL chi đoàn & liên chi đoàn', link: 'manager-branchs'},
  { title: 'QL CLB',                      link: '#'},
  { title: 'Hồ sơ Đoàn viên từ Khoa',     link: '#'},
]

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  posts = POSTS;
  widget_title = 'Quản lý';
  
  constructor() { }

  ngOnInit(): void {
  }

}
