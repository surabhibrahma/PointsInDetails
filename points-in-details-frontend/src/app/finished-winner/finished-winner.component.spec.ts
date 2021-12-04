import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedWinnerComponent } from './finished-winner.component';

describe('FinishedWinnerComponent', () => {
  let component: FinishedWinnerComponent;
  let fixture: ComponentFixture<FinishedWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedWinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
