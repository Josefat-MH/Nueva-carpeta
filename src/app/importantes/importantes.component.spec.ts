import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantesComponent } from './importantes.component';

describe('ImportantesComponent', () => {
  let component: ImportantesComponent;
  let fixture: ComponentFixture<ImportantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
