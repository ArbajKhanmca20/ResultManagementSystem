import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TeacherloginComponent } from './components/teacherlogin/teacherlogin.component';
import { StudentsearchresultComponent } from './components/studentsearchresult/studentsearchresult.component';
import { AppRoutingModule } from './app-routing.module';
import { TeacherAddResultComponent } from './components/teacher-add-result/teacher-add-result.component';
import { ResultManageComponent } from './components/result-manage/result-manage.component';
import { TeacherEditResultComponent } from './components/teacher-edit-result/teacher-edit-result.component';
import { StudentResultComponent } from './components/student-result/student-result.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    TeacherloginComponent,
    StudentsearchresultComponent,
    TeacherAddResultComponent,
    ResultManageComponent,
    TeacherEditResultComponent,
    StudentResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
