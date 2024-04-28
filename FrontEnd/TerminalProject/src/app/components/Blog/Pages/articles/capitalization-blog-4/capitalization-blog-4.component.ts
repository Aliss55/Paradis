import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-capitalization-blog-4',
  templateUrl: './capitalization-blog-4.component.html',
  styleUrl: './capitalization-blog-4.component.scss'
})
export class CapitalizationBlog4Component implements OnInit{

  constructor(private viewportScrollerService: ViewportScroller) {
  }

  ngOnInit(): void {
    this.viewportScrollerService.scrollToPosition([0, 0]);
    }


}
