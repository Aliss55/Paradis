import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodBlog2Component } from './period-blog-2.component';

describe('DotBlog2Component', () => {
  let component: PeriodBlog2Component;
  let fixture: ComponentFixture<PeriodBlog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeriodBlog2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodBlog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
