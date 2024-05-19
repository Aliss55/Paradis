import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageOfULetterUComponent } from './usage-of-uletter-u.component';

describe('UsageOfULetterUComponent', () => {
  let component: UsageOfULetterUComponent;
  let fixture: ComponentFixture<UsageOfULetterUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsageOfULetterUComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsageOfULetterUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
