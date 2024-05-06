import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSentencesInputComponent } from './complete-sentences-input.component';

describe('CompleteSentencesInputComponent', () => {
  let component: CompleteSentencesInputComponent;
  let fixture: ComponentFixture<CompleteSentencesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompleteSentencesInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompleteSentencesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
