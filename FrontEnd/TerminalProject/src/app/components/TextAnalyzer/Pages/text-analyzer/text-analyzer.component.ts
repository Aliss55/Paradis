import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SpellCheckerService} from "../../services/spell-checker.service";
import {SpellChecker} from "../../interfaces/spell-checker";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {Editor} from "primeng/editor";

@Component({
  selector: 'app-text-analyzer',
  templateUrl: './text-analyzer.component.html',
  styleUrl: './text-analyzer.component.scss'
})
export class TextAnalyzerComponent{
  analyzeTextForm: FormGroup<any>;
  fontSize: number = 20;
  isAnalyzeButtonClicked: boolean = false;
  visible: boolean = true;
  spellChecker: SpellChecker[] = [];
  hasSpellCheckerResponse: boolean = false;
  hasSuggestion: boolean = false;
  suggestion: string = 'sugerencia';

  @ViewChild('editor') primeEditor: Editor | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private spellCheckerService: SpellCheckerService
  ) {
    this.analyzeTextForm = this.formBuilder.group({
      text: [''],
      suggesterChecked: [false]
    });
  }

  toggleFormat(format: string) {
    const currentFormat = this.primeEditor!.quill.getFormat();
    this.primeEditor!.quill.format(format, !currentFormat[format]);
  }

  updateFontSize(delta: number) {
    this.fontSize += delta;
    this.updateEditorStyle();
  }

  updateEditorStyle() {
    const editorElement = this.primeEditor!.el.nativeElement.querySelector('.ql-editor');
    editorElement.style.fontSize = this.fontSize + 'px';
  }

  alignText(alignment: string) {
    this.primeEditor!.quill.format('align', alignment);
  }

  suggestNextWord() {
    if(this.analyzeTextForm!.get('suggesterChecked')!.value) {
      this.appendWord(this.suggestion);
    }
  }

  appendWord(suggestion: string) {
    let lastIndex = this.primeEditor!.quill.getLength() - 1;
    this.primeEditor!.quill.insertText(lastIndex, ' ' + suggestion);
    this.primeEditor!.quill.formatText(lastIndex, suggestion.length+1, 'color', 'gray');
    this.primeEditor!.quill.setSelection(lastIndex, 0);
    this.hasSuggestion = true;
  }

  analyzeText() {
    this.hasSpellCheckerResponse = false;
    this.isAnalyzeButtonClicked = true;
    this.spellCheckerService.checkSpelling(this.analyzeTextForm!.get('text')!.value)
      .subscribe(
        (spellChecker: SpellChecker[]) => {
          this.spellChecker = spellChecker;
          this.hasSpellCheckerResponse = true;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  acceptSuggestion() {
    let lastIndex = this.primeEditor!.quill.getLength()-1;

    // Replace the suggestion with itself without format
    let theme = localStorage.getItem('theme$');
    this.primeEditor!.quill.formatText(lastIndex-this.suggestion.length, this.suggestion.length, 'color', theme === 'dark' ? 'ligth' : 'black');
    this.primeEditor!.quill.setSelection(lastIndex, 0);
    this.hasSuggestion = false;
  }


  rejectSuggestion(event: KeyboardEvent) {
    if (event.key !== 'Tab' && this.hasSuggestion) {
      let allText = this.primeEditor!.quill.getText().split(' ');
      allText.pop();
      this.analyzeTextForm!.get('text')!.setValue('');
      this.primeEditor!.quill.insertText(0, allText.join(' '));
      let index = this.primeEditor!.quill.getLength();
      this.primeEditor!.quill.setSelection(index+1, 0);
      this.hasSuggestion = false;
    }
  }
}
