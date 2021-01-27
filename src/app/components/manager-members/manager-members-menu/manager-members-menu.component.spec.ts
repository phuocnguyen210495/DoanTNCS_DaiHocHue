import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMembersMenuComponent } from './manager-members-menu.component';

describe('ManagerMembersMenuComponent', () => {
  let component: ManagerMembersMenuComponent;
  let fixture: ComponentFixture<ManagerMembersMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerMembersMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerMembersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
