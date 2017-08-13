import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompareComponent } from './list-compare.component';

describe('ListCompareComponent', () => {
  let component: ListCompareComponent;
  let fixture: ComponentFixture<ListCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
