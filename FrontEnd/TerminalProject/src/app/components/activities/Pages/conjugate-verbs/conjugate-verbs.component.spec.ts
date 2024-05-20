import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjugateVerbsComponent } from './conjugate-verbs.component';

describe('ConjugateVerbsComponent', () => {
  let component: ConjugateVerbsComponent;
  let fixture: ComponentFixture<ConjugateVerbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConjugateVerbsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConjugateVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
