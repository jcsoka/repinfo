import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreposComponent } from './allrepos.component';

describe('AllreposComponent', () => {
  let component: AllreposComponent;
  let fixture: ComponentFixture<AllreposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllreposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllreposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
