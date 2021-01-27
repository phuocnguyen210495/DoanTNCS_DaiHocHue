import { Component, OnInit } from '@angular/core';

// Data mockup
const POSTS = [
  { 
    'id' : 1,  
    'title' : 'Đảng "Ái quốc" bất ngờ được thành lập ở Mỹ, phía ông Trump lên tiếng',
    'publishdate' : '2021-01-26'
  },
  { 
    'id' : 2,  
    'title' : 'Thu nhập 330 tỷ đồng từ viết app di động có khả thi?',
    'publishdate' : '2021-01-26'
  },
  { 
    'id' : 3,  
    'title' : 'Nút bấm bí ẩn xuất hiện trên bàn làm việc của ông Biden',
    'publishdate' : '2021-01-26'
  },
  { 
    'id' : 4,  
    'title' : 'Vụ chiếm đoạt 430 tỷ đồng: "Ngân hàng không đền thì ai đền?"',
    'publishdate' : '2021-01-26'
  },
  { 
    'id' : 5,  
    'title' : 'Lập hội đồng thẩm định báo cáo nghiên cứu tiền khả thi sân bay Sa Pa',
    'publishdate' : '2021-01-26'
  },
  { 
    'id' : 6,  
    'title' : 'Phát huy tinh thần cống hiến vì đất nước của mọi người dân Việt Nam',
    'publishdate' : '2021-01-26'
  },
];

@Component({
  selector: 'app-posts-news',
  templateUrl: './posts-news.component.html',
  styleUrls: ['./posts-news.component.scss']
})
export class PostsNewsComponent implements OnInit {
  posts = POSTS;


  constructor() { }

  ngOnInit(): void {
  }

}
