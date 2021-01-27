import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faEdit, faUpload } from '@fortawesome/free-solid-svg-icons';

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
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit {
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

  formGroupStudent        : any ;
  formGroupMember         : any ;
  studentPicture          : any ;
  isEditAvatar            : any ;
  isEditStudent           : any ;
  isEditMember            : any ;
  
  constructor() { }

  ngOnInit(): void {
    // Get icons
    this.editIcon   = faEdit   ;
    this.uploadIcon = faUpload ;

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

    // Create mockup form groups
    this.formGroupStudent = new FormGroup({ 
      avatarUrl       : new FormControl("https://maycongso.vn/uploaded/2020/05/svtn12.jpg"),
      userType        : new FormControl("Thành viên"),
      lastName        : new FormControl("Phạm"),
      middleName      : new FormControl("Thị Hải"),
      firstName       : new FormControl("Yến"),
      studentCode     : new FormControl("42.01.104.122"),
      studyStatus     : new FormControl("Đã thôi học"),
      class           : new FormControl("Công nghệ thông tin A"),
      studyDate       : new FormControl("2016-09-05"),
      birthDate       : new FormControl("1998-11-01"),
      studyKind       : new FormControl("Cao đẳng"),
      gender          : new FormControl("Nữ"),
      major           : new FormControl("Công nghệ phần mềm"),
      idNumber        : new FormControl("366257408"),
      faculty         : new FormControl("Công nghệ thông tin"),
      phoneNumber     : new FormControl("0523187254"),
      email           : new FormControl("pthyst2@gmail.com"),
      address         : new FormControl("208/43 Phan Xích Long, khóm 4, phường 20, huyện Bến Lức, tỉnh Long An"),
      nation          : new FormControl("Kinh"),
      religion        : new FormControl("Không tôn giáo"),
      policyCategory  : new FormControl("Diện chính sách 3"),
    });
    this.formGroupMember = new FormGroup({
      unionMission    : new FormControl("Chưa rõ thông tin"),
      position        : new FormControl("Đoàn viên"),
      unionJoinDate   : new FormControl("2013-03-26"),
      area            : new FormControl("Chưa rõ thông tin"),
      partyJoinDate   : new FormControl("2021-01-01")
    });

    // Get student avatar URL
    this.studentPicture  = this.formGroupStudent.controls.avatarUrl.value;

    // Set edit mode is false
    this.isEditAvatar   = false ;
    this.isEditStudent  = false ;
    this.isEditMember   = false ;  
  }
}
