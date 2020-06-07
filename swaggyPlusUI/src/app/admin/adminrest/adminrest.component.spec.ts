import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrestComponent } from './adminrest.component';

describe('AdminrestComponent', () => {
  let component: AdminrestComponent;
  let fixture: ComponentFixture<AdminrestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminrestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
