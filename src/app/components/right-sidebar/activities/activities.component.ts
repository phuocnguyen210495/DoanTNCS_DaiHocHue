import { Component, OnInit } from '@angular/core';

// Data mockup
const POSTS = [
  { id: 1, title: 'Khởi tạo hoạt động'                            },
  { id: 2, title: 'Quản lý tác vụ'                                },
  { id: 3, title: 'Phân bổ nguồn lực'                             },
  { id: 4, title: 'Đánh giá Đoàn viên'                            }
]

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  posts = POSTS;
  widget_title = 'Quản lý hoạt động';
  
  constructor() { }

  ngOnInit(): void {
  }

}
