import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-teacher-edit-result',
  templateUrl: './teacher-edit-result.component.html',
  styleUrls: ['./teacher-edit-result.component.css']
})
export class TeacherEditResultComponent implements OnInit {

  studentResult:any={
    "id":"",
    "name":"",
    "dob":"",
    "score":""
  };
  editStudent!: any;
  constructor(private studentService: StudentsService,private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    //console.log(this.router.snapshot.params['id']);
    this.studentService.getStudentById(this.router.snapshot.params['id']).subscribe((result)=>{
      this.studentResult=result;
    });
  }
  editresult() {
     this.studentService.updateStudentData(this.router.snapshot.params['id'],this.studentResult)
     .subscribe( (result)  => {
         console.log(result);
         this.route.navigate(['result'])
     })
  }
}
