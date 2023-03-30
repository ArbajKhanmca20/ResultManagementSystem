import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { ResultManageComponent } from "./components/result-manage/result-manage.component";
import { StudentsearchresultComponent } from "./components/studentsearchresult/studentsearchresult.component";
import { TeacherAddResultComponent } from "./components/teacher-add-result/teacher-add-result.component";
import { TeacherloginComponent } from "./components/teacherlogin/teacherlogin.component";
import { TeacherEditResultComponent } from "./components/teacher-edit-result/teacher-edit-result.component";
import { StudentResultComponent } from "./components/student-result/student-result.component";
import { AuthGuard } from "./auth.guard";


const routes:Routes=[
  {path:"",component:HomepageComponent},
  {path:"teacherlogin",component:TeacherloginComponent},
  {path:"studentsearch",component:StudentsearchresultComponent},
  {path:"result",component:ResultManageComponent,canActivate:[AuthGuard]},
  {path:"addrecord",component:TeacherAddResultComponent,canActivate:[AuthGuard]},
  {path:"editrecord/:id",component:TeacherEditResultComponent,canActivate:[AuthGuard]},
  {path:"showresult",component:StudentResultComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
