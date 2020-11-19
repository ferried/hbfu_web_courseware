import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiagouComponent } from './jiagou.component';

describe('JiagouComponent', () => {
  let component: JiagouComponent;
  let fixture: ComponentFixture<JiagouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JiagouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JiagouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
