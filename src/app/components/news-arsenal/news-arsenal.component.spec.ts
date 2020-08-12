import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArsenalComponent } from './news-arsenal.component';

describe('NewsArsenalComponent', () => {
  let component: NewsArsenalComponent;
  let fixture: ComponentFixture<NewsArsenalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsArsenalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArsenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
