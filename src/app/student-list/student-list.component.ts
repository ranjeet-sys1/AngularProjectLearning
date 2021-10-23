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
  stdEmail:string="";
  filterTerm: string;

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
  deleteStudent(id:any){
    console.log("delete student");
    this.service.deleteStudent(id).subscribe(
      data=>{
        this.message=data;
        this.getAllStudent();
      },
      error=>{
        console.log(error);
      });
  }
  searchByEmail(email:string){
    console.log("search student "+((document.getElementById("Search") as HTMLInputElement).value));
    var num1 = ((document.getElementById("Search") as HTMLInputElement).value);
    console.log(num1);
    this.service.searchByEmail(num1).subscribe(
      data=>{
        this.message=data;
        
      },
      error=>{
        console.log(error);
      });
  }


}
