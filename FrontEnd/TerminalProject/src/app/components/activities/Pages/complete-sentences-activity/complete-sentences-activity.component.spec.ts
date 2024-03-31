import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSentencesActivityComponent } from './complete-sentences-activity.component';

describe('CompleteSentencesActivityComponent', () => {
  let component: CompleteSentencesActivityComponent;
  let fixture: ComponentFixture<CompleteSentencesActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompleteSentencesActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompleteSentencesActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
