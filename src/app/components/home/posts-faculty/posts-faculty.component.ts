import { Component, OnInit } from '@angular/core';

// Data mockup
const POSTS : any = [];

@Component({
  selector: 'app-posts-faculty',
  templateUrl: './posts-faculty.component.html',
  styleUrls: ['./posts-faculty.component.scss']
})
export class PostsFacultyComponent implements OnInit {
  posts = POSTS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
