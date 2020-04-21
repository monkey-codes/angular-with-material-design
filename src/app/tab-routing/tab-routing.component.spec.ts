import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRoutingComponent } from './tab-routing.component';

describe('TabRoutingComponent', () => {
  let component: TabRoutingComponent;
  let fixture: ComponentFixture<TabRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
