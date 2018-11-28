import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattableaddComponent } from './mattableadd.component';

describe('MattableaddComponent', () => {
  let component: MattableaddComponent;
  let fixture: ComponentFixture<MattableaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattableaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattableaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
