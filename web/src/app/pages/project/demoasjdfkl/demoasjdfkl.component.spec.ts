import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoasjdfklComponent } from './demoasjdfkl.component';

describe('DemoasjdfklComponent', () => {
  let component: DemoasjdfklComponent;
  let fixture: ComponentFixture<DemoasjdfklComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoasjdfklComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoasjdfklComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
