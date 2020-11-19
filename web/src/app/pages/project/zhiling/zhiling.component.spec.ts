import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhilingComponent } from './zhiling.component';

describe('ZhilingComponent', () => {
  let component: ZhilingComponent;
  let fixture: ComponentFixture<ZhilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZhilingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
