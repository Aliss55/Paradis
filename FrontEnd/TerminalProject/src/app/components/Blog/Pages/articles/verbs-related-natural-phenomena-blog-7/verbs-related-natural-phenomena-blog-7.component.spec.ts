import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsRelatedNaturalPhenomenaBlog7Component } from './verbs-related-natural-phenomena-blog-7.component';

describe('VerbsRelatedNaturalPhenomenaBlog7Component', () => {
  let component: VerbsRelatedNaturalPhenomenaBlog7Component;
  let fixture: ComponentFixture<VerbsRelatedNaturalPhenomenaBlog7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerbsRelatedNaturalPhenomenaBlog7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerbsRelatedNaturalPhenomenaBlog7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
