import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathchalangeComponent } from './mathchalange.component';

describe('MathchalangeComponent', () => {
  let component: MathchalangeComponent;
  let fixture: ComponentFixture<MathchalangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathchalangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathchalangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
