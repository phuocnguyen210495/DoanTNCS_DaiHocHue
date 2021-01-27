import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMembersListComponent } from './manager-members-list.component';

describe('ManagerMembersListComponent', () => {
  let component: ManagerMembersListComponent;
  let fixture: ComponentFixture<ManagerMembersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerMembersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerMembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
