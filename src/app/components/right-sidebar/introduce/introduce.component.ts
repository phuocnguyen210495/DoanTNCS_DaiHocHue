import { Component, OnInit } from '@angular/core';

// Data mockup
const POSTS = [
  { id: 1, title: 'Giới thiệu chung'                              },
  { id: 2, title: 'Cơ cấu tổ chức'                                },
  { id: 3, title: 'Đoàn TNCS Hồ Chí Minh'                         },
  { id: 4, title: 'Hội LHTN Huế'                                  },
  { id: 5, title: 'Hội TNTP Huế'                                  },
  { id: 6, title: 'Tư liệu - Văn kiện'                            }
]

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {
  posts = POSTS;
  widget_title = 'Giới thiệu';
  
  constructor() { }

  ngOnInit(): void {
  }

}
