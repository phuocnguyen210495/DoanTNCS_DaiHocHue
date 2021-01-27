import { Component, OnInit } from '@angular/core';

// Data mockup
const REPORT = [
  { key: 'online', displayText: 'Đang online', value: 999         },
  { key: 'visitToday', displayText: 'Hôm nay', value: 15099       },
  { key: 'visitYesterday', displayText: 'Hôm qua', value: 13999   },
  { key: 'visitTotal', displayText: 'Tổng cộng', value: 1969696   }
]

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  report = REPORT;
  widget_title = 'Thống kê';

  constructor() { }
  ngOnInit(): void {
  }

}
