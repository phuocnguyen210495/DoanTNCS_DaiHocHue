import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tourism-faculty',
  templateUrl: './tourism-faculty.component.html',
  styleUrls: ['./tourism-faculty.component.scss'],
})
export class TourismFacultyComponent implements OnInit {
  faculys = [
    {
      id: 1,
      name: 'Công tác Giao Dục',
      content: ' Chủ tịch Hồ Chí Minh với sự nghiệp giáo dục thiếu nhi',
      date: '13:30 - 16/-5/2020',
      seen: '9.696',
      text:
        'trong suốt cuộc đời hoạt đọng cách mạng của mình, lể từ khi tìm dduwwocj con đường suuws dân cứu nước cho đến luucs vĩnh biệt chunngs ta, Chr tịch Hồ CHí Minh đã không ngừng chăm lo , săm sóc đến sự nghiệp bồi dưỡng thế hệ trẻ, dành cho họ, "muôn vàn thân yêu, và một nieemftin vững chăc vào khả năng cahc smangj to lớn',
    },
    {
      id: 2,
      name: 'Công tác Giao Dục',
      content: ' Chủ tịch Hồ Chí Minh với sự nghiệp giáo dục thiếu nhi',
      date: '13:30 - 16/-5/2020',
      seen: '9.696',
      text:
        'trong suốt cuộc đời hoạt đọng cách mạng của mình, lể từ khi tìm dduwwocj con đường suuws dân cứu nước cho đến luucs vĩnh biệt chunngs ta, Chr tịch Hồ CHí Minh đã không ngừng chăm lo , săm sóc đến sự nghiệp bồi dưỡng thế hệ trẻ, dành cho họ, "muôn vàn thân yêu, và một nieemftin vững chăc vào khả năng cahc smangj to lớn',
    },
    {
      id: 3,
      name: 'Công tác Giao Dục',
      content: ' Chủ tịch Hồ Chí Minh với sự nghiệp giáo dục thiếu nhi',
      date: '13:30 - 16/-5/2020',
      seen: '9.696',
      text:
        'trong suốt cuộc đời hoạt đọng cách mạng của mình, lể từ khi tìm dduwwocj con đường suuws dân cứu nước cho đến luucs vĩnh biệt chunngs ta, Chr tịch Hồ CHí Minh đã không ngừng chăm lo , săm sóc đến sự nghiệp bồi dưỡng thế hệ trẻ, dành cho họ, "muôn vàn thân yêu, và một nieemftin vững chăc vào khả năng cahc smangj to lớn',
    },
    {
      id: 4,
      name: 'Công tác Giao Dục',
      content: ' Chủ tịch Hồ Chí Minh với sự nghiệp giáo dục thiếu nhi',
      date: '13:30 - 16/-5/2020',
      seen: '9.696',
      text:
        'trong suốt cuộc đời hoạt đọng cách mạng của mình, lể từ khi tìm dduwwocj con đường suuws dân cứu nước cho đến luucs vĩnh biệt chunngs ta, Chr tịch Hồ CHí Minh đã không ngừng chăm lo , săm sóc đến sự nghiệp bồi dưỡng thế hệ trẻ, dành cho họ, "muôn vàn thân yêu, và một nieemftin vững chăc vào khả năng cahc smangj to lớn',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}
  clickRoute() {
    this.router.navigate(['/faculty/faculty-content']);
    console.log('ok');
  }
}
