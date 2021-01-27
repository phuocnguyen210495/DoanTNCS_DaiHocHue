import { Component, OnInit } from '@angular/core';

// Data mockup
const POSTS  : any[] = []

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
  posts = POSTS;
  widget_title = 'Đoàn khoa Du lịch';
  
  constructor() { }

  ngOnInit(): void {
  }

}
