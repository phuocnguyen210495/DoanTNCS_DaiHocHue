import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';

// Mockup data
const BRANCHS = [
  {
    'name'       : 'Chi đoàn Toán - Tin A',
    'members'    : 30,
    'leader'     : 'Bùi Nguyên Thiệu',
    'createDate' : '2020-03-26',
  },
  {
    'name'       : 'Chi đoàn Toán - Tin B',
    'members'    : 25,
    'leader'     : 'Liêu Hóa',
    'createDate' : '2020-02-26'
  },
  {
    'name'       : 'Chi đoàn Công nghệ Thông tin A',
    'members'    : 20,
    'leader'     : 'Phí Phương Em',
    'createDate' : '2020-06-23'
  },
  {
    'name'       : 'Chi đoàn Công nghệ Thông tin B',
    'members'    : 40,
    'leader'     : 'Bùi Bích Phương',
    'createDate' : '2020-03-26'
  },
  {
    'name'       : 'Chi đoàn Công nghệ Thông tin C',
    'members'    : 10,
    'leader'     : 'Chu Việt Dũng',
    'createDate' : '2020-11-01'
  },
  {
    'name'       : 'Chi đoàn Thế Chất A',
    'members'    : 30,
    'leader'     : 'Nguyễn Duy',
    'createDate' : '2020-03-26'
  },
  {
    'name'       : 'Chi đoàn Mỹ thuật A',
    'members'    : 5,
    'leader'     : 'Nguyễn Phúc Gia Huy',
    'createDate' : '2020-03-26'
  },
]

@Component({
  selector: 'app-branchs',
  templateUrl: './branchs.component.html',
  styleUrls: ['./branchs.component.scss']
})

export class BranchsComponent implements OnInit {
  // Icon
  plusIcon = faPlus;

  filterTerm : any;
  branchs = BRANCHS;

  constructor() { }

  ngOnInit(): void {
  }
}
