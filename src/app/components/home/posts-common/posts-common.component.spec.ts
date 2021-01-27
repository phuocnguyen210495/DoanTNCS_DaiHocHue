import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCommonComponent } from './posts-common.component';

describe('PostsCommonComponent', () => {
  let component: PostsCommonComponent;
  let fixture: ComponentFixture<PostsCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
