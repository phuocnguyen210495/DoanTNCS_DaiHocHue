import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

const REASONS = [
  'Gộp lại với chi đoàn khác',
  'Không đủ đoàn viên hoạt động Đoàn',
  'Đổi thành Liên chi đoàn'
]

@Component({
  selector: 'app-branch-delete',
  templateUrl: './branch-delete.component.html',
  styleUrls: ['./branch-delete.component.scss']
})
export class BranchDeleteComponent implements OnInit {
  reasons = REASONS;
  removeBranch = new FormGroup({
    rmName   : new FormControl('Chi đoàn Công nghệ Thông tin A'),
    rmLeader : new FormControl('Bùi Văn Nguyện'),
    rmReason : new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

}
