import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodpComponent } from './todp.component';

describe('TodpComponent', () => {
  let component: TodpComponent;
  let fixture: ComponentFixture<TodpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
