import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit      } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const FACULTIES = [
  { 'f_id' : '001', 'f_name' : 'Công nghệ Thông tin' },
  { 'f_id' : '002', 'f_name' : 'Toán - Tin'          },
  { 'f_id' : '003', 'f_name' : 'Việt Nam học'        },
  { 'f_id' : '004', 'f_name' : 'Giáo dục Thể chất'   },
  { 'f_id' : '005', 'f_name' : 'Giáo dục Chính trị'  },
  { 'f_id' : '006', 'f_name' : 'Mỹ thuật'            }
]

const CLASSES = [
  { 'f_id' : '001', 'c_id' : '001', 'c_name' : 'Công nghệ thông tin A'    },
  { 'f_id' : '001', 'c_id' : '002', 'c_name' : 'Công nghệ thông tin B'    },
  { 'f_id' : '001', 'c_id' : '003', 'c_name' : 'Công nghệ thông tin C'    },
  { 'f_id' : '002', 'c_id' : '004', 'c_name' : 'Toán - Tin A'             },
  { 'f_id' : '002', 'c_id' : '005', 'c_name' : 'Toán - Tin B'             },
  { 'f_id' : '003', 'c_id' : '006', 'c_name' : 'Ngôn ngữ Việt Nam A'      },
  { 'f_id' : '003', 'c_id' : '007', 'c_name' : 'Ngôn ngữ Việt Nam B'      },
  { 'f_id' : '004', 'c_id' : '008', 'c_name' : 'Thế chất A'               },
  { 'f_id' : '005', 'c_id' : '009', 'c_name' : 'Chính trị - quốc phòng A' },
  { 'f_id' : '006', 'c_id' : '010', 'c_name' : 'Mỹ thuật A'               },
]

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

@Component({
  selector: 'app-branch-add',
  templateUrl: './branch-add.component.html',
  styleUrls: ['./branch-add.component.scss']
})

export class BranchAddComponent implements OnInit {
  data_faculties = FACULTIES ;
  data_classes   = CLASSES   ;
  data_members   = MEMBERS   ;

  icon_arrow_right = faArrowRight;
  icon_arrow_down  = faArrowDown;
  
  filtered_classes : any = [] ;
  filtered_members : any = [] ;

  fg_select = new FormGroup({
    fc_faculty : new FormControl(''),
    fc_class   : new FormControl(''),
    fc_member  : new FormControl('')
  })

  fg_newbranch = this.fb.group({
    fc_name    : '',
    fc_leader  : '',
    fc_members : this.fb.array([])
  })

  // List member to display
  display_members : any = [] ;
  display_picture : string = '/assets/imgs/logodoan.png';


  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }
 
  loadPicture(_url : string){
    let src = "/assets/imgs/";
    this.display_picture = src + _url;
  }

  // ******************
  // Add member from select group to new branch  
  // ******************
  addMember(){
    // Get member by id
    let mem : any;
    let id = this.fg_select.controls['fc_member'].value;

    if (this.isIdInList(id) === false){
      for (let m of this.data_members){ 
        if ( m.m_id === id){ 
          mem = m;
        }
      }
      
      let fullname   : string = '';
      if (mem.m_middlename === ''){ fullname = mem.m_lastname + ' ' + mem.m_firstname  }
      else { fullname = mem.m_lastname + ' ' + mem.m_middlename + ' ' + mem.m_firstname }
  
      // Get class name and faculty name
      let classname   : string = '';
      let facultyname : string = '';
      for (let c of this.data_classes){
        if (c.c_id === mem.c_id)
        { 
          classname = c.c_name;
          for (let f of this.data_faculties){
            if (f.f_id === c.f_id){
              facultyname = f.f_name;
            }
          } 
        }
      }
  
      this.listMembers.push(
        this.fb.group({
          m_id          : mem.m_id,
          m_studentcode : mem.m_studentcode,
          m_avatar      : mem.m_avatar,
          m_fullname    : fullname,
          m_classname   : classname,
          m_facultyname : facultyname
        })
      )

      this.display_members = this.listMembers;
      this.setLeader();
    }
    else {}
  }
  
  // ******************
  // Get (FromControl)branchMembers as FormArray  
  // Return : FormArray
  // ******************
  get listMembers(){
    return this.fg_newbranch.get('fc_members') as FormArray;
  }

  // ******************
  // Remove member from list members at index
  // Params : _index (number)
  // ******************
  removeMember(_index : number){
    this.display_members.removeAt(_index);
    if (this.isNotNull(this.display_members.controls) === false){
      this.fg_newbranch.controls['fc_leader'].setValue(null);
    }
  }

  // ******************
  // Check if item's id already exists in list
  // Params : _id (number)
  // Return : boolean
  // ******************
  isIdInList(_id : number){
    if (this.isNotNull(this.display_members.controls) === true){
      for (let c of this.display_members.controls){
        if (c.get("m_id").value === _id){
          return true;
        }
      }
    }
    return false;
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
  // Get the first class of faculty by f_id
  // Params : _id (string)
  // Return : object
  // ******************
  getFirstClass(_id: string):any{
    for (let c of this.data_classes){
      if (c.f_id === _id){
        return c;
      }
    }
  }

  // ******************
  // Get the first member of class by c_id
  // Params : _id (string)
  // Return : object
  // ******************
  getFirstMember(_id: string):any{
    for (let m of this.data_members){
      if (m.c_id === _id){
        return m;
      }
    }
  }

  // ******************
  // Filter classes by faculty id at input
  // ******************
  filterClasses(){
    let filter : any = [];
    let f_id   : any = this.fg_select.controls['fc_faculty'].value;
    for (let c of this.data_classes){
      if (c.f_id === f_id){
        filter.push(c);
      }
    }
    this.filtered_classes = filter;
    this.fg_select.controls['fc_class'].setValue(this.getFirstClass(f_id).c_id);
    this.filterMembers();
  }

  // ******************
  // Filter members by class id at input
  // ******************
  filterMembers(){
    let filter : any = [];
    let c_id   : any = this.fg_select.controls['fc_class'].value;
    for (let m of this.data_members){
      if (m.c_id === c_id){
        filter.push(m);
      }
    }
    this.filtered_members = filter;
    this.fg_select.controls['fc_member'].setValue(this.getFirstMember(c_id).m_id);
  }

  // ******************
  // Set default leader for new branch
  // ******************
  setLeader(){
    if (this.isNotNull(this.display_members.controls) === true && (this.fg_newbranch.controls['fc_leader'].value === null || this.fg_newbranch.controls['fc_leader'].value !== undefined)){
      this.fg_newbranch.controls['fc_leader'].setValue(this.display_members.controls[0].get('m_id').value);
    }
  }

  showNewBranchData(){
    console.log("New brach: ");
    console.log(this.fg_newbranch.value);
  }
}

