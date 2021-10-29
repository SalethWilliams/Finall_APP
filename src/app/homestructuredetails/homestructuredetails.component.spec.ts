import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestructuredetailsComponent } from './homestructuredetails.component';

describe('HomestructuredetailsComponent', () => {
  let component: HomestructuredetailsComponent;
  let fixture: ComponentFixture<HomestructuredetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomestructuredetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomestructuredetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
