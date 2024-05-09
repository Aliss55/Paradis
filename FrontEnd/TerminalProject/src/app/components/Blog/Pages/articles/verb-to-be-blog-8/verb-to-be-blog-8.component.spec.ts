import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbToBeBlog8Component } from './verb-to-be-blog-8.component';

describe('VerbToBeBlog8Component', () => {
  let component: VerbToBeBlog8Component;
  let fixture: ComponentFixture<VerbToBeBlog8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerbToBeBlog8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerbToBeBlog8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
