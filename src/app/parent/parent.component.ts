import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  studentData: any = [""];
  formdata: any;
  student: any;


  constructor() { }
  ngOnInit(): void {

    this.formdata = new FormGroup({
      email: new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])),
      password: new FormControl("")

    })
  }




  Submit(data: any) {
    this.student = data;
    this.studentData.push(data);
    console.log(this.studentData);
    this.formdata = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")

    })
  }

}
