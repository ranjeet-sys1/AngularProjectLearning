import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl :'http://localhost:8080/api';  

  constructor(private http: HttpClient) { }
  createStudent(student: Student): Observable<any> {  
    console.log(student);
    return this.http.post('http://localhost:8080/api/save', student,{responseType:'text'});  
  }
  getStudentList(): Observable<any> {  
    // return this.http.get(`${this.baseUrl}`+'/all');  
    return this.http.get('http://localhost:8080/api/all');
  }
      
}
