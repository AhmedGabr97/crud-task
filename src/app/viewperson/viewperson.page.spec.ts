import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewpersonPage } from './viewperson.page';

describe('ViewpersonPage', () => {
  let component: ViewpersonPage;
  let fixture: ComponentFixture<ViewpersonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
