import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferNewsDetailComponent } from './transfer-news-detail.component';

describe('TransferNewsDetailComponent', () => {
  let component: TransferNewsDetailComponent;
  let fixture: ComponentFixture<TransferNewsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferNewsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferNewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
