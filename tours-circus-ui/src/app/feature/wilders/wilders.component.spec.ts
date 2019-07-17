import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildersComponent } from './wilders.component';

describe('WildersComponent', () => {
  let component: WildersComponent;
  let fixture: ComponentFixture<WildersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
