import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanActionComponent } from './plan-action.component';

describe('ActionComponent', () => {
  let component: PlanActionComponent;
  let fixture: ComponentFixture<PlanActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
