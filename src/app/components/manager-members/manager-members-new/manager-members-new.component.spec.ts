import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMembersNewComponent } from './manager-members-new.component';

describe('ManagerMembersNewComponent', () => {
  let component: ManagerMembersNewComponent;
  let fixture: ComponentFixture<ManagerMembersNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerMembersNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerMembersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
