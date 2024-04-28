import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverbBlog6Component } from './adverb-blog-6.component';

describe('AdverbBlog6Component', () => {
  let component: AdverbBlog6Component;
  let fixture: ComponentFixture<AdverbBlog6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdverbBlog6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdverbBlog6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
