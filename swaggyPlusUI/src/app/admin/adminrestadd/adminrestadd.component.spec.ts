import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrestaddComponent } from './adminrestadd.component';

describe('AdminrestaddComponent', () => {
  let component: AdminrestaddComponent;
  let fixture: ComponentFixture<AdminrestaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminrestaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrestaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
