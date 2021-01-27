import { Component, OnInit } from '@angular/core';

// Data mockup
const POSTS = [
  { 
    'id' : 1,  
    'title' : 'Thường trực Đoàn TNCS Hồ Chí Minh - Hội sinh viên Đại học Huế Khóa V',
    'publishdate' : '2021-01-26'
  },
  { 
    'id' : 2,  
    'title' : 'Cụm Huế - 3 cá nhân xuất sắc tham gia vòng Chung kết toàn quốc - Star Union, cuộc thi Star Award 2021',
    'publishdate' : '2021-01-25'
  },
  { 
    'id' : 3,  
    'title' : 'Thư viện sách chuyền tay - mô hình cần nhân rộng của Đoàn Thanh niên, Hội sinh viên Đại học Huế',
    'publishdate' : '2021-01-25'
  },
  { 
    'id' : 4,  
    'title' : 'Thông báo Tuyển sinh Cao học đợt 1 năm 2021 của Đại học Huế',
    'publishdate' : '2021-01-24'
  },
  { 
    'id' : 5,  
    'title' : 'Viện Pháp tại Huế thông báo tổ chức đào tạo nhiếp ảnh từ 26 đến 28/01/2021',
    'publishdate' : '2021-01-24'
  },
  { 
    'id' : 6,  
    'title' : 'Đại học Huế trên các bảng xếp hạng đại học thế giới năm 2020',
    'publishdate' : '2021-01-23'
  },
];

@Component({
  selector: 'app-posts-common',
  templateUrl: './posts-common.component.html',
  styleUrls: ['./posts-common.component.scss']
})
export class PostsCommonComponent implements OnInit {
  posts = POSTS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
