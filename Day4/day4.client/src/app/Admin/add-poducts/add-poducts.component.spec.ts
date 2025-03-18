import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoductsComponent } from './add-poducts.component';

describe('AddPoductsComponent', () => {
  let component: AddPoductsComponent;
  let fixture: ComponentFixture<AddPoductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPoductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPoductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
