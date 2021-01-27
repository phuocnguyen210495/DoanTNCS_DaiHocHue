import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchEditSuccessComponent } from './branch-edit-success.component';

describe('BranchEditSuccessComponent', () => {
  let component: BranchEditSuccessComponent;
  let fixture: ComponentFixture<BranchEditSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchEditSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchEditSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
