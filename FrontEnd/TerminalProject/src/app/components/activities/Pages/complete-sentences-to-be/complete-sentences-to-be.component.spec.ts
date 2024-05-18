import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSentencesToBeComponent } from './complete-sentences-to-be.component';

describe('CompleteSentencesToBeComponent', () => {
  let component: CompleteSentencesToBeComponent;
  let fixture: ComponentFixture<CompleteSentencesToBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompleteSentencesToBeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompleteSentencesToBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
