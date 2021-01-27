import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchDeleteSuccessComponent } from './branch-delete-success.component';

describe('BranchDeleteSuccessComponent', () => {
  let component: BranchDeleteSuccessComponent;
  let fixture: ComponentFixture<BranchDeleteSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchDeleteSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchDeleteSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
