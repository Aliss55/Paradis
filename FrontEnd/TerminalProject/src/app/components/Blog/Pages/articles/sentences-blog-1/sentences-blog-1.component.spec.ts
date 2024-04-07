import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentencesBlog1Component } from './sentences-blog-1.component';

describe('SentencesBlog1Component', () => {
  let component: SentencesBlog1Component;
  let fixture: ComponentFixture<SentencesBlog1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SentencesBlog1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SentencesBlog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
