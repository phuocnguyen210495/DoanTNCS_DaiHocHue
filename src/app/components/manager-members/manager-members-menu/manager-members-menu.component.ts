import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manager-members-menu',
  templateUrl: './manager-members-menu.component.html',
  styleUrls: ['./manager-members-menu.component.scss']
})

export class ManagerMembersMenuComponent implements OnInit {
  plusIcon = faPlus;
  searchIcon = faSearch;
  
  studentForm = new FormGroup({
    studentCode : new FormControl(''),
    idNumber : new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  get studentCode(){ return this.studentForm.get('studentCode')}
  get idNumber(){ return this.studentForm.get('idNumber')}
}
