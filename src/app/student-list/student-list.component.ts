import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:Student[];
  message:any[];

  constructor(private service:StudentService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllStudent();
  }
  getAllStudent(){
    console.log("api clicked");
    this.service.getStudentList().subscribe(
      data=>{
        this.students=data;
      },
      error=>{
        console.log(error);
      }
    );
  }


}
