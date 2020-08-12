import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferNewsComponent } from './transfer-news.component';

describe('TransferNewsComponent', () => {
  let component: TransferNewsComponent;
  let fixture: ComponentFixture<TransferNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
