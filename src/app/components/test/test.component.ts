import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {
  
  myModel = new FormGroup({
    realName : new FormControl('', [ Validators.minLength(4),Validators.required ]),
    email    : new FormControl('', [ Validators.required, Validators.email ]),
    phoneNumber : new FormControl('', [ Validators.required, Validators.pattern('^(84|0[3|5|7|8|9])+([0-9]{8})$')])
  });

  constructor() { }

  ngOnInit(): void {
  }

  get realName(){ return this.myModel.get('realName')}
  get email(){ return this.myModel.get('email')}
  get phoneNumber(){ return this.myModel.get('phoneNumber')}

  onSubmit(){
    console.log("FORM DATA: ");
    console.log(this.myModel.value);
  }
}
