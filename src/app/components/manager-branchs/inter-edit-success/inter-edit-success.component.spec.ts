import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterEditSuccessComponent } from './inter-edit-success.component';

describe('InterEditSuccessComponent', () => {
  let component: InterEditSuccessComponent;
  let fixture: ComponentFixture<InterEditSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterEditSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterEditSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
