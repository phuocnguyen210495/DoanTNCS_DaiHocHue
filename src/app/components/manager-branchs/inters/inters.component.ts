import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';

// Mockup data
const INTERS = [
  {
    'name'       : 'Liên chi đoàn CNTT - Toán - Tin',
    'branchs'    : 30,
    'leader'     : 'Bùi Phương Dung',
    'createdate' : '2020-03-26',
  },
  {
    'name'       : 'Liên chi đoàn Văn - Thể - Mỹ',
    'branchs'    : 40,
    'leader'     : 'Phí Phương Em',
    'createdate' : '2020-03-26',
  },
  {
    'name'       : 'Liên chi đoàn Quốc phòng - Chính trị',
    'branchs'    : 35,
    'leader'     : 'Nguyễn Phúc Gia Huy',
    'createdate' : '2020-03-26',
  },
]

@Component({
  selector: 'app-inters',
  templateUrl: './inters.component.html',
  styleUrls: ['./inters.component.scss']
})

export class IntersComponent implements OnInit {
  // Icon
  plusIcon = faPlus;

  filterTerm : any;
  inters = INTERS;

  constructor() { }

  ngOnInit(): void {
  }

}
