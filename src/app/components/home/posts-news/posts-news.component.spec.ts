import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsNewsComponent } from './posts-news.component';

describe('PostsNewsComponent', () => {
  let component: PostsNewsComponent;
  let fixture: ComponentFixture<PostsNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
