import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerBranchsComponent } from './manager-branchs.component';

describe('ManagerBranchsComponent', () => {
  let component: ManagerBranchsComponent;
  let fixture: ComponentFixture<ManagerBranchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerBranchsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerBranchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
