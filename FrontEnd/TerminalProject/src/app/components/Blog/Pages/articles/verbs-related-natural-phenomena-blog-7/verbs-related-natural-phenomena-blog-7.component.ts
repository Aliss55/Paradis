import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-verbs-related-natural-phenomena-blog-7',
  templateUrl: './verbs-related-natural-phenomena-blog-7.component.html',
  styleUrl: './verbs-related-natural-phenomena-blog-7.component.scss'
})
export class VerbsRelatedNaturalPhenomenaBlog7Component implements OnInit{
  constructor(private viewportScrollerService: ViewportScroller) {
  }

  ngOnInit(): void {
    this.viewportScrollerService.scrollToPosition([0, 0]);
  }

}
