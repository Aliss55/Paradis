import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommasAndTagQuestionsBlog9Component } from './commas-and-tag-questions-blog-9.component';

describe('CommasAndTagQuestionsComponent', () => {
  let component: CommasAndTagQuestionsBlog9Component;
  let fixture: ComponentFixture<CommasAndTagQuestionsBlog9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommasAndTagQuestionsBlog9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommasAndTagQuestionsBlog9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
