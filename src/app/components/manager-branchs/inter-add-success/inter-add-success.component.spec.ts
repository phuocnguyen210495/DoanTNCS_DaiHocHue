import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterAddSuccessComponent } from './inter-add-success.component';

describe('InterAddSuccessComponent', () => {
  let component: InterAddSuccessComponent;
  let fixture: ComponentFixture<InterAddSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterAddSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterAddSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
