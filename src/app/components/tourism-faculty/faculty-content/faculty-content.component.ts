import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-content',
  templateUrl: './faculty-content.component.html',
  styleUrls: ['./faculty-content.component.scss'],
})
export class FacultyContentComponent implements OnInit {
  content = {
    id: 1,
    title: 'Công tác giáo dục',
    title1: 'Chủ tịch Hồ Chí Minh với sự nghiệp giaops dục thiếu nhi',
    date: '13:30 - 16/-5/2020',
    seen: '9.696',
    content2:
      'Trong suốt cuộc đời hoạt động cách mạng của mình, kể từ khi tìm được con đường cứu dân cứu nước cho đến lúc vĩnh biệt chúng ta, Chủ tịch Hồ Chí Minh đã không ngừng chăm lo, săn sóc đến sự nghiệp bồi dưỡng thế hệ trẻ, dành cho họ “muôn vàn tình thân yêu” và một niềm tin vững chắc vào khả năng cách mạng to lớn của tuổi trẻ Việt Nam. Lòn yêu thương sâu sắc, bao la của Bác Hồ đối với thiếu nhi không gì có thể so sánh nổi. Đó vừa là tình cảm của một lãnh tụ cách mạng kiệt xuất vừa là của người Bác kính yêu vô cùng gần gũi, luôn luôn đồng cảm và chan hoà với các cháu. Theo tư tưởng của Người, trẻ em luôn luôn là một chủ thể sáng tạo, một lực lượng tham gia tích cực trong công cuộc xây dựng và bảo vệ đất nước, một bộ phận của lực lượng cách mạng, là người chủ tương lai của nước nhà',
    img: 'assets/imgs/132339871139597282_h1.jpg',
    note:
      'Chủ tịch Hồ Chí Minh đón các cháu thiếu nhi tại Phủ Chủ tịch trong ngày Tết Trung thu năm 1961. (Ảnh: Tư liệu TTXVN)',
  };
  constructor() {}

  ngOnInit() {}
}
