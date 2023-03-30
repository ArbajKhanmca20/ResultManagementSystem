import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-studentsearchresult',
  templateUrl: './studentsearchresult.component.html',
  styleUrls: ['./studentsearchresult.component.css']
})
export class StudentsearchresultComponent implements OnInit {

  constructor(private student: StudentsService) { }
  public studentRecord!:  {
    name: string,
    dob: string,
    score: number,
    id:number
}
  toggle:boolean=false;
  ngOnInit(): void {
  }
  search(searchForm: NgForm) {
    console.log(searchForm.value);
    const stud = searchForm.value;
    this.student.onSearch().subscribe({
      next: (arr) => {
        let record ;
        arr.forEach((i) => { if(i.id === stud.rollNo && i.dob === stud.dob) record=i });
        console.log(record)
        if (record) {
          this.studentRecord = record;
          this.toggle=true;
          console.log(this.studentRecord)
        }
        else {
          alert("No Match Found")
        }
      }
      ,
      error: (err) => {
        console.log(err);
      }
    });
  }
  searchAnother(){
    this.toggle=false;
  }
}
