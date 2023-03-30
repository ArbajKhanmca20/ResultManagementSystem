import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-teacher-add-result',
  templateUrl: './teacher-add-result.component.html',
  styleUrls: ['./teacher-add-result.component.css'],
})
export class TeacherAddResultComponent implements OnInit {
  constructor(private studentService: StudentsService,private router:Router) {}

  ngOnInit(): void {}
  addResult(addStudent: NgForm) {
    console.log(addStudent.value);
    this.studentService.addStudent(addStudent.value).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['result'])

      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
