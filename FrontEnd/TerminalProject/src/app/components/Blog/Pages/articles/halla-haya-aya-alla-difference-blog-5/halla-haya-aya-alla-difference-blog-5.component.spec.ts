import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallaHayaAyaAllaDifferenceBlog5Component } from './halla-haya-aya-alla-difference-blog-5.component';

describe('HallaHayaAyaAllaDifferenceBlog5Component', () => {
  let component: HallaHayaAyaAllaDifferenceBlog5Component;
  let fixture: ComponentFixture<HallaHayaAyaAllaDifferenceBlog5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HallaHayaAyaAllaDifferenceBlog5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HallaHayaAyaAllaDifferenceBlog5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
