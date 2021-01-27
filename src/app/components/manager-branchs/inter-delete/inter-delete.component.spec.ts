import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterDeleteComponent } from './inter-delete.component';

describe('InterDeleteComponent', () => {
  let component: InterDeleteComponent;
  let fixture: ComponentFixture<InterDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
