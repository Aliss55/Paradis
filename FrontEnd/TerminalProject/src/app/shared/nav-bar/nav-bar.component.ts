import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {TranslateService} from "@ngx-translate/core";
import {forkJoin, map, Observable, tap} from "rxjs";

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {

  constructor(private translateService: TranslateService) {
  }

//   ngOnInit(): void {
//     this.getTranslatedOptions();
//     console.log(this.items);
//     }
//
  options: string[] = ['OPTIONS.ABOUT_US', 'OPTIONS.ACTIVITIES', 'OPTIONS.BLOG', 'OPTIONS.ABOUT_US', 'OPTIONS.ABOUT_US'];
  items: MenuItem[] = [];
//
//  public getTranslatedOptions(): void{
//    this.options.forEach((option) => {
//      this.translateService.get(option).subscribe((data) => {
//        this.items.push({label: String(data)});
//      });
//    });
//  }
// }

  ngOnInit(): void {
    // this.getTranslatedOptions().subscribe(() => {
    //   console.log(this.items);
    // });
  }
}

//   public getTranslatedOptions(): Observable<void> {
//     const translationObservables: Observable<string>[] = this.options.map((option) => {
//       return this.translateService.get(option);
//     });
//
//     return forkJoin(translationObservables).pipe(
//       tap((translations: string[]) => {
//         this.items = translations.map((translation) => ({label: translation}));
//       }),
//       // Map the result to void since the tap operator requires the return type to be Observable<void>
//       // If you don't need to return anything, you can omit this map operator.
//       map(() => {
//       })
//     );
//   }
// }
// items: MenuItem[] | undefined =
//   [
//     {
//       this.translateService.get('OPTIONS.ABOUT_US').subscribe( (data)=>{next: label: String(data)})
//     },
//     {
//       label: 'LOGO',
//     },
//     {
//       label: 'LOGO',
//     },
//     {
//       label: 'LOGO',
//     },
//     {
//       label: 'LOGO',
//     }
//   ]
