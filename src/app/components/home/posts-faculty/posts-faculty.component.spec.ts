import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsFacultyComponent } from './posts-faculty.component';

describe('PostsFacultyComponent', () => {
  let component: PostsFacultyComponent;
  let fixture: ComponentFixture<PostsFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
