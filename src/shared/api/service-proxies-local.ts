import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';   
  
@Injectable({  
  providedIn: 'root'  
})  
export class LocalApiService {   
  
  constructor(private http: HttpClient) { }   

  getStudentsList() {  
    let url = 'https://localhost:44351/api/Students/GetStudentList'; 
    return this.http.get(`${url}`);  
  }  
   
  getStudent(studentId: any) {  
    let url = 'https://localhost:44351/api/Students/GetStudent'; 
    return this.http.get(`${url}?studentId=${studentId}`);  
  } 
} 