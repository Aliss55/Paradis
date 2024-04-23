import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommaBlog3Component } from './comma-blog-3.component';

describe('CommaBlog3Component', () => {
  let component: CommaBlog3Component;
  let fixture: ComponentFixture<CommaBlog3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommaBlog3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommaBlog3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
