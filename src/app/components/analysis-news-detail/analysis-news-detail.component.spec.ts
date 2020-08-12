import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisNewsDetailComponent } from './analysis-news-detail.component';

describe('AnalysisNewsDetailComponent', () => {
  let component: AnalysisNewsDetailComponent;
  let fixture: ComponentFixture<AnalysisNewsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisNewsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisNewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
