import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzitongxinComponent } from './fuzitongxin.component';

describe('FuzitongxinComponent', () => {
  let component: FuzitongxinComponent;
  let fixture: ComponentFixture<FuzitongxinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuzitongxinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuzitongxinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
