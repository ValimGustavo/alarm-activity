import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCreateComponent } from './time-create.component';

describe('TimeCreateComponent', () => {
  let component: TimeCreateComponent;
  let fixture: ComponentFixture<TimeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
