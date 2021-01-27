import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchAddSuccessComponent } from './branch-add-success.component';

describe('BranchAddSuccessComponent', () => {
  let component: BranchAddSuccessComponent;
  let fixture: ComponentFixture<BranchAddSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchAddSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchAddSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
