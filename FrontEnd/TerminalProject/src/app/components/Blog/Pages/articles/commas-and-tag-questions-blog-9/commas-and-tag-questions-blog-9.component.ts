import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-commas-and-tag-questions-blog-9',
  templateUrl: './commas-and-tag-questions-blog-9.component.html',
  styleUrl: './commas-and-tag-questions-blog-9.component.scss'
})
export class CommasAndTagQuestionsBlog9Component implements OnInit{
  constructor(private viewportScrollerService: ViewportScroller) {
  }

  ngOnInit(): void {
    this.viewportScrollerService.scrollToPosition([0, 0]);
  }
}
