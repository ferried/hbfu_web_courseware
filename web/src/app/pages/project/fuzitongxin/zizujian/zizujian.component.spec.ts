import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZizujianComponent } from './zizujian.component';

describe('ZizujianComponent', () => {
  let component: ZizujianComponent;
  let fixture: ComponentFixture<ZizujianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZizujianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZizujianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
