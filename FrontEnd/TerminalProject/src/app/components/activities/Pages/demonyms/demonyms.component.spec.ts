import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonymsComponent } from './demonyms.component';

describe('DemonymsComponent', () => {
  let component: DemonymsComponent;
  let fixture: ComponentFixture<DemonymsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemonymsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemonymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
