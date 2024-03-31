import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntryTemplateComponent } from './blog-entry-template.component';

describe('BlogEntryTemplateComponent', () => {
  let component: BlogEntryTemplateComponent;
  let fixture: ComponentFixture<BlogEntryTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogEntryTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogEntryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
