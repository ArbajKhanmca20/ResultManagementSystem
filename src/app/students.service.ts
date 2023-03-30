import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url='http://localhost:3000/result';
  constructor(private http:HttpClient) { }
  getAllStudent(){
    return this.http.get( this.url );
  }
  deleteStudent(id: any) {
    return this.http.delete( `${this.url}/${id}`);
  }
  addStudent(student: any){
    return this.http.post(this.url,student);
  }
  getStudentById( id: any ){
    return this.http.get( `${this.url}/${id}`);
  }
  updateStudentData(id: any,data: any){
    return this.http.put( `${this.url}/${id}`,data);
  }
  onSearch(){
    return this.http.get<any[]>( this.url );
  }
}
