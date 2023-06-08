import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCategoryComponent } from './by-category.component';

describe('ByCategoryComponent', () => {
  let component: ByCategoryComponent;
  let fixture: ComponentFixture<ByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByCategoryComponent]
    });
    fixture = TestBed.createComponent(ByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
