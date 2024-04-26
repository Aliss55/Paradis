import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalizationBlog4Component } from './capitalization-blog-4.component';

describe('CapitalizationComponent', () => {
  let component: CapitalizationBlog4Component;
  let fixture: ComponentFixture<CapitalizationBlog4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapitalizationBlog4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalizationBlog4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
