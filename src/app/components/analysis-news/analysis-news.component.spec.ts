import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisNewsComponent } from './analysis-news.component';

describe('AnalysisNewsComponent', () => {
  let component: AnalysisNewsComponent;
  let fixture: ComponentFixture<AnalysisNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
