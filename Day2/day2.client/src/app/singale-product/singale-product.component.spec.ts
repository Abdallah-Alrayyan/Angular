import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingaleProductComponent } from './singale-product.component';

describe('SingaleProductComponent', () => {
  let component: SingaleProductComponent;
  let fixture: ComponentFixture<SingaleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingaleProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingaleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
