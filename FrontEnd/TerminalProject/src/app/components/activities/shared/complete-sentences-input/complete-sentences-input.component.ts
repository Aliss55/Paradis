import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'activities-shared-complete-sentences-input',
  templateUrl: './complete-sentences-input.component.html',
  styleUrl: './complete-sentences-input.component.scss'
})
export class CompleteSentencesInputComponent {
  // TODO: this component is not finished

  @Input() public questions!: Array<string>;
  public trial = 'Soy alicia __'
  inputPlaceholder: string = "__";
  inputField = '<input type="text" pInputText [(ngModel)]="value" />';
  question!: SafeHtml;
  value? : string;
  constructor(private sanitizer: DomSanitizer) {
   this.replaceUnderscoresForInputFields();
  }

  replaceUnderscoresForInputFields() {
    const sanitizedInputField: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.inputField);
    const text = this.trial.replace(this.inputPlaceholder, this.inputField);
    this.question = this.sanitizer.bypassSecurityTrustHtml(text);
    this.trial = text;
    console.warn(this.value)
  }
}

// https://stackoverflow.com/questions/64144945/how-to-render-using-innerhtml-in-angular
// https://www.youtube.com/watch?v=XATU_ZQyB6Q
