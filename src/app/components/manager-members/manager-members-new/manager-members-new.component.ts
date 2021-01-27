import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

// Mockup Input selects
const STUDENT__GENDERS = ['Nam', 'Nữ'];
const STUDENT__STUDY_STATUSES = [ 'Đang học' , 'Đã tốt nghiệp', 'Bảo lưu', 'Đã thôi học'];
const STUDENT__MAJORS = ['Công nghệ phần mềm', 'Công nghệ phần cứng', 'Công nghệ nhúng', 'Nhân văn - Xã hội học', 'Thiết kế đồ họa'];
const STUDENT__FACULTIES = [ 'Toán - Tin', 'Công nghệ thông tin', 'Việt Nam học', 'Thể chất', 'Mỹ thuật'];
const STUDENT__CLASSES = [ 
  'Công nghệ thông tin A',
  'Công nghệ thông tin B',
  'Công nghệ thông tin C',
  'Toán - Tin A',
  'Việt Nam học A01',
  'Việt Nam học A02',
  'Việt Nam học B01',
  'Việt Nam học B02',
  'Thể chất A',
  'Mỹ thuật A'
];
const STUDENT__STUDY_KINDS = [ 'Chính quy', 'Liên thông', 'Vừa làm - vừa học', 'Văn bằng 2', 'Sau đại học', 'Cao đẳng' ];
const STUDENT__NATIONS = [ 'Kinh', 'Hoa', 'Khmer', 'Chăm', 'Tày', 'Mường', 'Dân tộc khác' ];
const MEMBER__POSTIONS = [ 'Bí thư', 'Phó bí thư', 'Đoàn viên' ];
const STUDENT__RELIGIONS = [
  'Phật giáo',
  'Công giáo',
  'Cao Đài',
  'Hòa Hảo',
  'Tin Lành',
  'Hồi giáo',
  'Ấn Độ giáo',
  'Các tôn giáo khác',
  'Không tôn giáo'
];
const STUDENT__USER_TYPES = [ 'Quản trị viên' , 'Tác giả', 'Thành viên' ];
const STUDENT__POLICY_CATEGORIES = [ 'Diện chính sách 1', 'Diện chính sách 2', 'Diện chính sách 3', 'Không' ];

@Component({
  selector: 'app-manager-members-new',
  templateUrl: './manager-members-new.component.html',
  styleUrls: ['./manager-members-new.component.scss']
})

export class ManagerMembersNewComponent implements OnInit {
  editIcon                : any ;
  uploadIcon              : any ;
  studentGenders          : any ;
  studentNations          : any ;
  studentReligions        : any ;
  studentPolicyCategories : any ;
  studentStudyStatuses    : any ;
  studentStudyKinds       : any ;
  studentMajors           : any ;
  studentFaculties        : any ;
  studentClasses          : any ;
  studentUserTypes        : any ;
  memberPositions         : any ;

  studentForm             : any ;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Get selects's mockup data
    this.studentGenders           = STUDENT__GENDERS;
    this.studentNations           = STUDENT__NATIONS;
    this.studentReligions         = STUDENT__RELIGIONS;
    this.studentPolicyCategories  = STUDENT__POLICY_CATEGORIES;
    this.studentStudyStatuses     = STUDENT__STUDY_STATUSES;
    this.studentStudyKinds        = STUDENT__STUDY_KINDS;
    this.studentMajors            = STUDENT__MAJORS;
    this.studentFaculties         = STUDENT__FACULTIES;
    this.studentClasses           = STUDENT__CLASSES;
    this.studentUserTypes         = STUDENT__USER_TYPES;
    this.memberPositions          = MEMBER__POSTIONS;

    // Create form group
    this.studentForm = new FormGroup({
      studentPicture  : new FormControl(''),
      studentCode     : new FormControl(''),
      lastName        : new FormControl(''),
      middleName      : new FormControl(''),
      firstName       : new FormControl(''),
      idNumber        : new FormControl(''),
      phoneNumber     : new FormControl(''),
      email           : new FormControl(''),
      gender          : new FormControl(''),
      birthDate       : new FormControl(''),
      address         : new FormControl(''),
      nation          : new FormControl(''),
      religion        : new FormControl(''),
      policyCategory  : new FormControl(''),
      studyStatus     : new FormControl(''),
      studyDate       : new FormControl(''),
      studyKind       : new FormControl(''),
      major           : new FormControl(''),
      faculty         : new FormControl(''),
      class           : new FormControl(''),
      userType        : new FormControl(''),
      unionMission    : new FormControl(''),
      area            : new FormControl(''),
      position        : new FormControl(''),
      partyJoinDate   : new FormControl(''),
      unionJoinDate   : new FormControl('')
    })
  }

  onSubmit(){
    console.log('FORM DATA : ');
    console.log(this.studentForm.value);
  }
}
