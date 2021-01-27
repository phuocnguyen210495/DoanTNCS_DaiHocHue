import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersComponent } from './inters.component';

describe('IntersComponent', () => {
  let component: IntersComponent;
  let fixture: ComponentFixture<IntersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
