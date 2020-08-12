import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArsenalDetailComponent } from './news-arsenal-detail.component';

describe('NewsArsenalDetailComponent', () => {
  let component: NewsArsenalDetailComponent;
  let fixture: ComponentFixture<NewsArsenalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsArsenalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArsenalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
