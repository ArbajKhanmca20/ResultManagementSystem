import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEditResultComponent } from './teacher-edit-result.component';

describe('TeacherEditResultComponent', () => {
  let component: TeacherEditResultComponent;
  let fixture: ComponentFixture<TeacherEditResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherEditResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherEditResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
