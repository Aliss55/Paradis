import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-adverb-blog-6',
  templateUrl: './adverb-blog-6.component.html',
  styleUrl: './adverb-blog-6.component.scss'
})
export class AdverbBlog6Component implements OnInit{
  examples:any[] = [];
  examplesMente:any[] = [];

  constructor( private viewportScrollerService: ViewportScroller) {
  }

  ngOnInit(): void {
    this.viewportScrollerService.scrollToPosition([0, 0]);
    /*
    Carlos se encuentra muy mal.	Johan es un mal hombre.
Hoy comiste mejor.	Mis ideas son mejores que las tuyas.
Será peor decirle que no.	Los resultados fueron peores.
Habla muy recio.	Iván tiene una recia musculatura.
Trabaja duro.	El pan está duro.
Hay que cantar bajo.	Es un techo bajo.
    * */
    this.examples = [
      {
        'adverb':'Carlos se encuentra muy <strong>mal</strong>.',
        'adjective':'Johan es un <strong>mal</strong> hombre.'
      },
      {
        'adverb':'Hoy comiste <strong>mejor</strong>.',
        'adjective':'Mis ideas son <strong>mejores</strong> que las tuyas.'
      },
      {
        'adverb':'Será <strong>peor</strong> decirle que no.',
        'adjective':'Los resultados fueron <strong>peores</strong>.'
      },
      {
        'adverb':'Habla muy <strong>recio</strong>.',
        'adjective':'Iván tiene una <strong>recia</strong> musculatura.'
      },
      {
        'adverb':'Trabaja <strong>duro</strong>.',
        'adjective':'El pan está <strong>duro</strong>.'
      },
      {
        'adverb':'Hay que cantar <strong>bajo</strong>.',
        'adjective':'Es un techo <strong>bajo</strong>.'
      }
    ];

    this.examplesMente = [
      {
        'adverb':'último',
        'adjective':'últimamente'
      },
      {
        'adverb':'fácil',
        'adjective':'fácilmente'
      },
      {
        'adverb':'práctico',
        'adjective':'prácticamente'
      },
      {
        'adverb':'crítico',
        'adjective':'críticamente'
      }
    ];

  }

}
