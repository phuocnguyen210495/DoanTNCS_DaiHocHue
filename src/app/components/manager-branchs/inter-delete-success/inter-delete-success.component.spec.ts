import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterDeleteSuccessComponent } from './inter-delete-success.component';

describe('InterDeleteSuccessComponent', () => {
  let component: InterDeleteSuccessComponent;
  let fixture: ComponentFixture<InterDeleteSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterDeleteSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterDeleteSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
