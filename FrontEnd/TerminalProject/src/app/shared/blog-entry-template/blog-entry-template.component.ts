import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-blog-entry-template',
  templateUrl: './blog-entry-template.component.html',
  styleUrl: './blog-entry-template.component.scss',
})
export class BlogEntryTemplateComponent {
  @Input()
  public title: string = '';
  @Input()
  public mainExplanation: string = '';
  @Input()
  public subtitle: string = '';
  @Input()
  public secondExplanation: string = '';
}
