import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-sentences-blog-1',
  templateUrl: './sentences-blog-1.component.html',
  styleUrl: './sentences-blog-1.component.scss',
})
export class SentencesBlog1Component implements OnInit{
  title = 'Sentences Blog 1';
  mainExplanation =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi expedita quaerat quos tenetur. Ab blanditiis doloribus error fugiat id, impedit laudantium modi possimus praesentium quisquam repudiandae tempore voluptate. Commodi dolorum ex magni, maiores necessitatibus nostrum odio porro quo tenetur vero? Earum, excepturi sequi. Aperiam beatae deleniti est modi molestiae mollitia nesciunt possimus quas sequi tenetur! Ad facere molestiae necessitatibus nihil repudiandae. Aut dolorum ea expedita explicabo itaque laudantium, quo. Accusantium architecto culpa doloribus eos eveniet facere laboriosam molestiae mollitia quidem tenetur! Accusamus adipisci amet aspernatur commodi deleniti deserunt distinctio, dolores doloribus esse expedita ipsa itaque laborum maxime molestiae neque, nobis non perferendis perspiciatis placeat quae quia quisquam recusandae rem repudiandae, saepe sit soluta voluptas? A accusamus accusantium dicta, dolore dolorem enim error exercitationem inventore labore minima nulla odio perferendis quia quod rem reprehenderit rerum sapiente sunt tempora temporibus unde vero voluptates voluptatum? Commodi consectetur deserunt dolore dolorem doloribus facilis iste iusto, laboriosam magnam mollitia nemo non quaerat ratione recusandae rem, saepe sint voluptate! Quod recusandae sapiente sunt tempora. Culpa facere, ipsum iusto laudantium, minima molestias odio omnis praesentium quia tempore voluptate voluptates. Animi aspernatur ea praesentium? Cum cumque inventore iste odio perferendis porro quibusdam, recusandae, repellendus rerum sed temporibus veniam.';
  subtitle = 'Subtitles Blog 1';

  constructor(private viewportScrollerService: ViewportScroller) {
  }

  ngOnInit(): void {
    this.viewportScrollerService.scrollToPosition([0, 0]);
  }

}
