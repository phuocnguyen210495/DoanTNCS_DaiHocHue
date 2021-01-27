import { Component, OnInit } from '@angular/core';

// Data mockup
const POSTS : any[] = [];

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.scss']
})
export class InternalComponent implements OnInit {
  posts    = POSTS;
  widget_title = 'Thông tin nội bộ';

  constructor() { }

  ngOnInit(): void {
  }

}
