import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-halla-haya-aya-alla-difference-blog-5',
  templateUrl: './halla-haya-aya-alla-difference-blog-5.component.html',
  styleUrl: './halla-haya-aya-alla-difference-blog-5.component.scss'
})
export class HallaHayaAyaAllaDifferenceBlog5Component implements OnInit{
  constructor(private viewportScrollerService: ViewportScroller) {
  }

  ngOnInit(): void {
    this.viewportScrollerService.scrollToPosition([0, 0]);
  }

}
