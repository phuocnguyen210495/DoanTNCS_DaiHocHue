import { Component, OnInit } from '@angular/core';

const BRANCHS = [
  { 'name' : 'Chi đoàn Toán - Tin A',          'members' : 12, 'leader' : 'Nguyễn Phúc Gia Huy' },
  { 'name' : 'Chi đoàn Toán - Tin B',          'members' : 35, 'leader' : 'Đặng Trung Hiếu'     },
  { 'name' : 'Chi đoàn Toán - Tin C',          'members' : 20, 'leader' : 'Nguyễn Thị Ánh Viên' },
  { 'name' : 'Chi đoàn Công nghệ Thông tin A', 'members' : 10, 'leader' : 'Ngô Thừa Ân'         },
  { 'name' : 'Chi đoàn Công nghệ Thông tin B', 'members' : 15, 'leader' : 'Lục Tiểu Linh Đồng'  },
  { 'name' : 'Chi đoàn Công nghệ Thông tin A', 'members' : 20, 'leader' : 'Trần Thanh Phúc'     },
  { 'name' : 'Chi đoàn Vật lý A',              'members' : 10, 'leader' : 'Ngô Bảo Châu'        },
  { 'name' : 'Chi đoàn Mỹ thuật A',            'members' : 15, 'leader' : 'Hứa Ngọc Ký'         },
  { 'name' : 'Chi đoàn Thể chất A',            'members' : 20, 'leader' : 'Nguyễn Duy'          },
]

const INTERS = [
  { 'name' : 'Liên chi đoàn A', 'branchs' : 2, 'members' : 47, 'leader' : 'Nguyễn Phúc Gia Huy' },
  { 'name' : 'Liên chi đoàn B', 'branchs' : 3, 'members' : 45, 'leader' : 'Nguyễn Thị Ánh Viên' },
  { 'name' : 'Liên chi đoàn C', 'branchs' : 4, 'members' : 65, 'leader' : 'Ngô Bảo Châu'        },
]

@Component({
  selector: 'app-manager-branchs',
  templateUrl: './manager-branchs.component.html',
  styleUrls: ['./manager-branchs.component.scss']
})


export class ManagerBranchsComponent implements OnInit {
  branchs = BRANCHS;
  inters  = INTERS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
