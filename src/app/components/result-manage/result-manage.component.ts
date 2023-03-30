import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StudentsService} from '../../students.service';

@Component({
  selector: 'app-result-manage',
  templateUrl: './result-manage.component.html',
  styleUrls: ['./result-manage.component.css']
})
export class ResultManageComponent implements OnInit {
number:Number=0;
  constructor(private student:StudentsService ,public router:Router) { }
  studentData: any=[];

  ngOnInit(): void {
    this.student.getAllStudent().subscribe((allData)=>{
      console.log( allData);
      this.studentData=allData;
    });
  }
  deleteStudent(student_id : any){
    this.student.deleteStudent(student_id).subscribe(( result ) =>{
      this.ngOnInit();
    });
  }
  teacherLogin(){
    this.router.navigate(['teacherlogin'])
  }
  resultAdd(){
    this.router.navigate(['addrecord'])
  }
  resultEdit(id :any){
    this.router.navigateByUrl('/editrecord/'+id)
  }

}
