import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit      } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';

// Mockup data
const MEMBERS = [
  { 'c_id' : '001', 'm_id' : '001','m_studentcode' : '42.01.104.120', 'm_avatar' : 'doanvien_nam4.jpg', 'm_lastname' : 'Huỳnh Trương' , 'm_middlename' : 'Chí'      , 'm_firstname' : 'Quân'   },
  { 'c_id' : '001', 'm_id' : '002','m_studentcode' : '42.01.104.121', 'm_avatar' : 'doanvien_nu4.jpg',  'm_lastname' : 'Trần'         , 'm_middlename' : 'Phương'   , 'm_firstname' : 'Nguyên' },
  { 'c_id' : '002', 'm_id' : '003','m_studentcode' : '42.01.104.122', 'm_avatar' : 'doanvien_nam1.jpg', 'm_lastname' : 'Châu'         , 'm_middlename' : 'Thái'     , 'm_firstname' : 'Bảo'    },
  { 'c_id' : '002', 'm_id' : '004','m_studentcode' : '42.01.104.123', 'm_avatar' : 'doanvien_nam2.jpg', 'm_lastname' : 'Đặng'         , 'm_middlename' : 'Lê Gia'   , 'm_firstname' : 'Huy'    },
  { 'c_id' : '003', 'm_id' : '005','m_studentcode' : '42.01.104.124', 'm_avatar' : 'doanvien_nu1.jpg',  'm_lastname' : 'Nguyễn'       , 'm_middlename' : 'Trúc'     , 'm_firstname' : 'Quỳnh'  },
  { 'c_id' : '003', 'm_id' : '006','m_studentcode' : '42.01.104.125', 'm_avatar' : 'doanvien_nam3.jpg', 'm_lastname' : 'Mai'          , 'm_middlename' : 'Thanh'    , 'm_firstname' : 'Thế'    },
  { 'c_id' : '004', 'm_id' : '007','m_studentcode' : '42.01.104.126', 'm_avatar' : 'doanvien_nam5.jpg', 'm_lastname' : 'Mai'          , 'm_middlename' : 'Thanh'    , 'm_firstname' : 'Tâm'    },
  { 'c_id' : '004', 'm_id' : '008','m_studentcode' : '42.01.104.127', 'm_avatar' : 'doanvien_nu2.jpg',  'm_lastname' : 'Võ'           , 'm_middlename' : 'Thị Thùy' , 'm_firstname' : 'Trang'  },
  { 'c_id' : '005', 'm_id' : '009','m_studentcode' : '42.01.104.128', 'm_avatar' : 'doanvien_nu3.jpg',  'm_lastname' : 'Phí'          , 'm_middlename' : 'Phương'   , 'm_firstname' : 'Em'     },
  { 'c_id' : '005', 'm_id' : '010','m_studentcode' : '42.01.104.129', 'm_avatar' : 'unknow_avatar.jpg', 'm_lastname' : 'Cô'           , 'm_middlename' : 'Văn'      , 'm_firstname' : 'Nan'    },
  { 'c_id' : '006', 'm_id' : '011','m_studentcode' : '42.01.104.130', 'm_avatar' : 'unknow_avatar.jpg', 'm_lastname' : 'Tiền'         , 'm_middlename' : 'Trảm Hậu' , 'm_firstname' : 'Tấu'    },
  { 'c_id' : '006', 'm_id' : '012','m_studentcode' : '42.01.104.131', 'm_avatar' : 'unknow_avatar.jpg', 'm_lastname' : 'Tư'           , 'm_middlename' : 'Mã Minh'  , 'm_firstname' : 'Phong'  },
  { 'c_id' : '007', 'm_id' : '013','m_studentcode' : '42.01.104.132', 'm_avatar' : 'unknow_avatar.jpg', 'm_lastname' : 'Âu'           , 'm_middlename' : 'Dương'    , 'm_firstname' : 'Họa'    },
  { 'c_id' : '007', 'm_id' : '014','m_studentcode' : '42.01.104.133', 'm_avatar' : 'unknow_avatar.jpg', 'm_lastname' : 'Bách'         , 'm_middlename' : 'Hiểu'     , 'm_firstname' : 'Sinh'   },
  { 'c_id' : '008', 'm_id' : '015','m_studentcode' : '42.01.104.134', 'm_avatar' : 'unknow_avatar.jpg', 'm_lastname' : 'Lê'           , 'm_middlename' : ''         , 'm_firstname' : 'Biểu'   },
  { 'c_id' : '008', 'm_id' : '016','m_studentcode' : '42.01.104.135', 'm_avatar' : 'unknow_avatar.jpg', 'm_lastname' : 'Nguyễn Trần'  , 'm_middlename' : 'Trung'    , 'm_firstname' : 'Quốc'   },
  { 'c_id' : '009', 'm_id' : '017','m_studentcode' : '42.01.104.136', 'm_avatar' : 'naruto.jpg',        'm_lastname' : 'Vũ Trí'       , 'm_middlename' : 'Ba Tá'    , 'm_firstname' : 'Trợ'    },
  { 'c_id' : '009', 'm_id' : '018','m_studentcode' : '42.01.104.137', 'm_avatar' : 'sasuke.jpg',        'm_lastname' : 'Tuyền Qua'    , 'm_middlename' : 'Minh'     , 'm_firstname' : 'Nhân'   },
  { 'c_id' : '010', 'm_id' : '019','m_studentcode' : '42.01.104.138', 'm_avatar' : 'doanvien_nu5.jpg',  'm_lastname' : 'Bùi'          , 'm_middlename' : 'Bích'     , 'm_firstname' : 'Liễu'   },
  { 'c_id' : '010', 'm_id' : '020','m_studentcode' : '42.01.104.139', 'm_avatar' : 'unknow_avatar.jpg', 'm_lastname' : 'Bùi'          , 'm_middlename' : 'Văn'      , 'm_firstname' : 'Nguyện' }
]

const BRANCHS = [
  { 
    'b_id'              : '001', 
    'b_name'            : 'Chi đoàn Công nghệ thông tin A',
    'b_member_quantity' : 2,
    'b_leader_id'       : '001',
    'b_createdate'      : '2020-03-26',
    'b_members_list'    : [
      { 'm_id' : '001', 'm_studentcode' : '42.01.104.120', 'm_lastname' : 'Huỳnh Trương', 'm_middlename' : 'Chí',    'm_firstname' : 'Quân'   },
      { 'm_id' : '002', 'm_studentcode' : '42.01.104.121', 'm_lastname' : 'Trần'        , 'm_middlename' : 'Phương', 'm_firstname' : 'Nguyên' }
    ]
  },
  { 
    'b_id'              : '002', 
    'b_name'            : 'Chi đoàn Công nghệ thông tin B',
    'b_member_quantity' : 2,
    'b_leader_id'       : '003',
    'b_createdate'      : '2020-03-26',
    'b_members_list'    : [
      { 'm_id' : '003', 'm_studentcode' : '42.01.104.122', 'm_lastname' : 'Châu', 'm_middlename' : 'Thái',   'm_firstname' : 'Bảo' },
      { 'm_id' : '004', 'm_studentcode' : '42.01.104.123', 'm_lastname' : 'Đặng', 'm_middlename' : 'Lê Gia', 'm_firstname' : 'Huy' }
    ]
  },
  { 
    'b_id'              : '003', 
    'b_name'            : 'Chi đoàn Công nghệ thông tin C',
    'b_member_quantity' : 2,
    'b_leader_id'       : '005',
    'b_createdate'      : '2020-03-26',
    'b_members_list'    : [
      { 'm_id' : '005', 'm_studentcode' : '42.01.104.124', 'm_lastname' : 'Nguyễn', 'm_middlename' : 'Trúc',  'm_firstname' : 'Quỳnh' },
      { 'm_id' : '006', 'm_studentcode' : '42.01.104.125', 'm_lastname' : 'Mai',    'm_middlename' : 'Thanh', 'm_firstname' : 'Thế'   }
    ]
  },
  { 
    'b_id'              : '004', 
    'b_name'            : 'Chi đoàn Toán - Tin A',
    'b_member_quantity' : 2,
    'b_leader_id'       : '007',
    'b_createdate'      : '2020-03-26',
    'b_members_list'    : [
      { 'm_id' : '007', 'm_studentcode' : '42.01.104.124', 'm_lastname' : 'Mai', 'm_middlename' : 'Thanh',    'm_firstname' : 'Tâm'   },
      { 'm_id' : '008', 'm_studentcode' : '42.01.104.125', 'm_lastname' : 'Võ',  'm_middlename' : 'Thị Thùy', 'm_firstname' : 'Trang' }
    ]
  },
  { 
    'b_id'              : '005', 
    'b_name'            : 'Chi đoàn Toán - Tin B',
    'b_member_quantity' : 2,
    'b_leader_id'       : '009',
    'b_createdate'      : '2020-03-26',
    'b_members_list'    : [
      { 'm_id' : '009', 'm_studentcode' : '42.01.104.126', 'm_lastname' : 'Phí', 'm_middlename' : 'Phương',   'm_firstname' : 'Em'  },
      { 'm_id' : '010', 'm_studentcode' : '42.01.104.127', 'm_lastname' : 'Cô',  'm_middlename' : 'Văn',      'm_firstname' : 'Nan' }
    ]
  },
]
const EXAMPLE_BRANCH = {
  'b_id' : '000',
  'b_name' : 'Chi đoàn hỗ trợ thông tin',
  'b_leader_id' : '000',
  'b_leader_name' : 'Lê Cát Trọng Lý',
  'b_createdate' : '2020-03-26',
  'b_member_quantity' : 5,
  'b_members_list' : [
    { 'm_id' : '000', 'm_studentcode' : '42.11.111.000', 'm_lastname' : 'Lê',   'm_middlename' : 'Cát Trọng', 'm_firstname' : 'Lý'   },
    { 'm_id' : '001', 'm_studentcode' : '42.11.111.001', 'm_lastname' : 'Tôn',  'm_middlename' : 'Hoa',       'm_firstname' : 'Sen'  },
    { 'm_id' : '002', 'm_studentcode' : '42.11.111.002', 'm_lastname' : 'Lê',   'm_middlename' : 'Thị',       'm_firstname' : 'Loan' },
    { 'm_id' : '003', 'm_studentcode' : '42.11.111.003', 'm_lastname' : 'Phan', 'm_middlename' : 'Kim',       'm_firstname' : 'Liên' },
    { 'm_id' : '004', 'm_studentcode' : '42.11.111.004', 'm_lastname' : 'Phan', 'm_middlename' : 'Kim',       'm_firstname' : 'Đỉnh' }
  ]
}

@Component({
  selector: 'app-inter-add',
  templateUrl: './inter-add.component.html',
  styleUrls: ['./inter-add.component.scss']
})

export class InterAddComponent implements OnInit {
  data_members        = MEMBERS        ;
  data_branchs        = BRANCHS        ;
  data_example_branch = EXAMPLE_BRANCH ;
  
  icon_arrow_right = faArrowRight ;
  icon_arrow_down  = faArrowDown  ;

  fg_select = new FormGroup({
    fc_branch : new FormControl('')
  })

  fg_newinter = this.fb.group({
    fc_name    : '',
    fc_leader  : '',
    fc_branchs : this.fb.array([])
  })

  // List branchs to display
  display_branchs : any = [] ;
  display_picture : string = '/assets/imgs/logodoan.png';

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  // Load branch's leader picture
  loadPicture(_url : string){
    let src = "/assets/imgs/";
    this.display_picture = src + _url;
  }

  // ******************
  // Check if array is not null or empty
  // Params : _array (array)
  // Return : boolean
  // ******************
  isNotNull(_array : any = []){
    if (_array.length <= 0){ return false }
    else{
      if (_array[0] === null || _array[0] === '' || _array[0] === undefined){ return false }
    }
    return true;
  }

  // ******************
  // Check if item's id already exists in list
  // Params : _id (number)
  // Return : boolean
  // ******************
  isIdInList(_id : number){
    if (this.isNotNull(this.display_branchs.controls) === true){
      for (let c of this.display_branchs.controls){
        if (c.get("b_id").value === _id){
          return true;
        }
      }
    }
    return false;
  }

  // ******************
  // Remove member from list members at index
  // Params : _index (number)
  // ******************
  removeBranch(_index : number){
    this.display_branchs.removeAt(_index);
    if (this.isNotNull(this.display_branchs.controls) === false){
      this.fg_newinter.controls['fc_leader'].setValue(null);
    }
  }

  get listBranchs(){
    return this.fg_newinter.get('fc_branchs') as FormArray;
  }

  addBranch(){
    // Get branch by id
    let branch : any ;
    let id = this.fg_select.controls['fc_branch'].value;

    if (this.isIdInList(id) === false){
      for (let b of this.data_branchs){
        if ( b.b_id === id){ branch = b }
      }

      let leader_name : any = '' ;
      let leader_avatar : any = '';

      for (let m of this.data_members){
        if ( m.m_id === branch.b_leader_id){
          if (m.m_middlename !== null && m.m_middlename !== '' && m.m_middlename !== undefined){
            leader_name = m.m_lastname + ' ' + m.m_middlename + ' ' + m.m_firstname;
          }
          else { leader_name = m.m_lastname + ' ' + m.m_firstname }
          leader_avatar = m.m_avatar;
        }
      }

      this.listBranchs.push(
        this.fb.group({
          b_id              : branch.b_id,
          b_name            : branch.b_name,
          b_leader_id       : branch.b_leader_id,
          b_leader_name     : leader_name,
          b_leader_avatar   : leader_avatar,
          b_member_quantity : branch.b_member_quantity,
          b_createdate      : branch.b_createdate
        })
      )
      this.display_branchs = this.listBranchs;
      this.setLeader();
    }
    else{}
  }

  setLeader(){
    if (this.isNotNull(this.display_branchs.controls) === true && (this.fg_newinter.controls['fc_leader'].value === null || this.fg_newinter.controls['fc_leader'].value !== undefined)){
      this.fg_newinter.controls['fc_leader'].setValue(this.display_branchs.controls[0].get('b_id').value);
    }
  }

  showNewInterData(){
    console.log("New inter: ");
    console.log(this.fg_newinter.value);
  }
}
