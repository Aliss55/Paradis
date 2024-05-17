import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteTheCorrectOptionComponent } from './write-the-correct-option.component';

describe('WriteTheCorrectOptionComponent', () => {
  let component: WriteTheCorrectOptionComponent;
  let fixture: ComponentFixture<WriteTheCorrectOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteTheCorrectOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteTheCorrectOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
