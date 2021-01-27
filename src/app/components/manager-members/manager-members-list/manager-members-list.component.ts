import { Component, OnInit } from '@angular/core';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';

const REMOVE_REASONS = [
  'Nhập sai thông tin Đoàn viên',
  'Đã hết tuổi sinh hoạt Đoàn',
  'Không đủ điều kiện tiếp tục sinh hoạt Đoàn',
  'Khai trừ khỏi Đoàn',
  'Không tham gia sinh hoạt Đoàn quá 3 tháng',
  'Không đóng đủ Đoàn phí quá 3 tháng' 
]

@Component({
  selector: 'app-manager-members-list',
  templateUrl: './manager-members-list.component.html',
  styleUrls: ['./manager-members-list.component.scss']
})
export class ManagerMembersListComponent implements OnInit {
  // Icon
  birthDateIcon = faBirthdayCake;

  // Mockup data
  students = [
    { 
      'studentCode' : '42.01.104.120',
      'firstName'   : 'Quân',
      'middleName'  : 'Chí',
      'lastName'    : 'Huỳnh Trương',
      'dateBirth'   : '01/11/1998', 
      'idNumber'    : '366257400',
      'class'       : 'Công nghệ thông tin A'
    },
    { 
      'studentCode' : '42.01.104.121',
      'firstName'   : 'Khải',
      'middleName'  : 'Quang',
      'lastName'    : 'Cao',
      'dateBirth'   : '02/11/1998', 
      'idNumber'    : '366257401',
      'class'       : 'Công nghệ thông tin B'
    },
    { 
      'studentCode' : '42.01.104.122',
      'firstName'   : 'Quyền',
      'middleName'  : 'Đình',
      'lastName'    : 'Phan',
      'dateBirth'   : '03/11/1998', 
      'idNumber'    : '366257402',
      'class'       : 'Công nghệ thông tin C'
    },
    { 
      'studentCode' : '42.01.104.123',
      'firstName'   : 'Kiệt',
      'middleName'  : 'Gia',
      'lastName'    : 'Châu',
      'dateBirth'   : '04/11/1998', 
      'idNumber'    : '366257403',
      'class'       : 'Toán - Tin A'
    },
    { 
      'studentCode' : '42.01.104.124',
      'firstName'   : 'Bảo',
      'middleName'  : 'Thái',
      'lastName'    : 'Châu',
      'dateBirth'   : '05/11/1998', 
      'idNumber'    : '366257404',
      'class'       : 'Toán - Tin B'
    },
  ];

  removeReasons = REMOVE_REASONS
  
  memberToRemove = new FormGroup({
    removeStudentCode : new FormControl(''),
    removeReason      : new FormControl('')
  })


  constructor() { }

  ngOnInit(): void {
  }

  removeMember(code:any){
    console.log("studentCode : ");
    console.log(code);
    this.memberToRemove.controls['removeStudentCode'].setValue(code);

    console.log("Form data: ");
    console.log(this.memberToRemove.value);
  }
}
