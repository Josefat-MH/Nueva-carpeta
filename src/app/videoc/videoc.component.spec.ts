import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocComponent } from './videoc.component';

describe('VideocComponent', () => {
  let component: VideocComponent;
  let fixture: ComponentFixture<VideocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
