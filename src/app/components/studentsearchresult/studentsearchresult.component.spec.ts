import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsearchresultComponent } from './studentsearchresult.component';

describe('StudentsearchresultComponent', () => {
  let component: StudentsearchresultComponent;
  let fixture: ComponentFixture<StudentsearchresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsearchresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsearchresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
