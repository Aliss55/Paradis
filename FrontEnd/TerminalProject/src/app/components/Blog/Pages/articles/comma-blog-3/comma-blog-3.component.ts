import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-comma-blog-3',
  templateUrl: './comma-blog-3.component.html',
  styleUrl: './comma-blog-3.component.scss'
})
export class CommaBlog3Component implements OnInit{

  constructor(private viewportScrollerService:ViewportScroller) {
  }

  ngOnInit(): void {
    this.viewportScrollerService.scrollToPosition([0, 0]);
    }
}
