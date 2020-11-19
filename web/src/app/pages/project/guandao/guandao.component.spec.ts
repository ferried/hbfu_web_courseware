import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuandaoComponent } from './guandao.component';

describe('GuandaoComponent', () => {
  let component: GuandaoComponent;
  let fixture: ComponentFixture<GuandaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuandaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuandaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
