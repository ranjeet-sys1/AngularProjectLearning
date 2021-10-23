import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  students:Student=new Student("","",0,"","","");
  message:any;
  


  constructor(private service:StudentService,
    private router:Router) { }

  ngOnInit(): void {
    this.students= new Student("","",0,"","","");
  }
  saveStudent(){
    console.log(this.students);
    this.service.createStudent(this.students).subscribe(data=>{
      this.message=data
    },error=>{
      console.log(error);
    }
    );
  }
  resetMessage(){
    this.message="";
  }
  searchStudentByName(name:any){
    console.log("api clicked");
    this.service.searchByName(this.students.stdName).subscribe(
      data=>{
        this.message=data
      },
      error=>{
        console.log(error);
        
      });
  }
  

}
