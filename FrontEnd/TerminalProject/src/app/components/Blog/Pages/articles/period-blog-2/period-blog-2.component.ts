import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-period-blog-2',
  templateUrl: './period-blog-2.component.html',
  styleUrl: './period-blog-2.component.scss'
})
export class PeriodBlog2Component implements OnInit{

  constructor(private viewportScrollerService: ViewportScroller) {
  }

  ngOnInit(): void {
    this.viewportScrollerService.scrollToPosition([0, 0]);
  }
}
