import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidFooterComponent } from './solid-footer.component';

describe('SolidFooterComponent', () => {
  let component: SolidFooterComponent;
  let fixture: ComponentFixture<SolidFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolidFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolidFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
