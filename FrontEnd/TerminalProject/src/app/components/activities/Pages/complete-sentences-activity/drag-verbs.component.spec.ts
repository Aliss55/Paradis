import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragVerbs } from './drag-verbs.component';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from '../../../../styling/prime-ng.module';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { DockModule } from 'primeng/dock';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

// import { DragVerbs } from './drag-verbs.component';
describe('CompleteSentencesActivityComponent', () => {
  let component: DragVerbs;
  let fixture: ComponentFixture<DragVerbs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragVerbs],
      imports: [TranslateModule.forRoot(), CardModule, TableModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DragVerbs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
