import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionsAndOccupationsComponent } from './professions-and-occupations.component';

describe('ProfessionsAndOccupationsComponent', () => {
  let component: ProfessionsAndOccupationsComponent;
  let fixture: ComponentFixture<ProfessionsAndOccupationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfessionsAndOccupationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionsAndOccupationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
