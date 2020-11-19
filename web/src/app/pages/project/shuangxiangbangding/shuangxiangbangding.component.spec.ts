import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuangxiangbangdingComponent } from './shuangxiangbangding.component';

describe('ShuangxiangbangdingComponent', () => {
  let component: ShuangxiangbangdingComponent;
  let fixture: ComponentFixture<ShuangxiangbangdingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuangxiangbangdingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuangxiangbangdingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
