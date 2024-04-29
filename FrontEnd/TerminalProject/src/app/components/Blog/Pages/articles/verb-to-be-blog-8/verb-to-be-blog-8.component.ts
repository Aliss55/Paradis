import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-verb-to-be-blog-8',
  templateUrl: './verb-to-be-blog-8.component.html',
  styleUrl: './verb-to-be-blog-8.component.scss'
})
export class VerbToBeBlog8Component implements OnInit{

  constructor(private viewportScrollerService: ViewportScroller) {
  }

  ngOnInit(): void {
        this.viewportScrollerService.scrollToPosition([0, 0]);
    }

}
