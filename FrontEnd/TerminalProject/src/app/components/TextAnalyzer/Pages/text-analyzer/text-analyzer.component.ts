import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SpellCheckerService} from "../../services/spell-checker.service";
import {SpellChecker} from "../../interfaces/spell-checker";
import {Editor} from "primeng/editor";
import {WordSuggesterService} from "../../services/word-suggester.service";
import {WordSuggester} from "../../interfaces/word-suggester";
import {GrammaticalAnalyzerService} from "../../services/grammatical-analyzer.service";
import {GrammaticalAnalyzer} from "../../interfaces/gammatical-analyzer";
import {ModerationService} from "../../services/moderation.service";
import {Moderation, Result} from "../../interfaces/moderation";
import {NotificationService} from "../../../activities/shared/services/notification-service.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-text-analyzer',
  templateUrl: './text-analyzer.component.html',
  styleUrl: './text-analyzer.component.scss'
})
export class TextAnalyzerComponent {
  analyzeTextForm: FormGroup<any>;
  fontSize: number = 20;
  isAnalyzeButtonClicked: boolean = false;
  visible: boolean = true;
  spellChecker: SpellChecker[] = [];
  grammaticalAnalyzer: GrammaticalAnalyzer[] = [];
  hasSpellCheckerResponse: boolean = false;
  hasSuggestion: boolean = false;
  hasGrammaticalAnalyzerResponse: boolean = false;
  suggestion: string = 'sugerencia';

  isContentInappropriate: boolean = false;

  @ViewChild('editor') primeEditor: Editor | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private spellCheckerService: SpellCheckerService,
    private wordSuggesterService: WordSuggesterService,
    private grammaticalAnalyzerService: GrammaticalAnalyzerService,
    private moderationService: ModerationService,
    private notificationService: NotificationService,
    private translateService: TranslateService
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
    if (this.analyzeTextForm!.get('suggesterChecked')!.value && !this.hasSuggestion) {
      this.wordSuggesterService.suggestWord(this.primeEditor!.quill.getText())
        .subscribe({
          next: (wordSuggester: WordSuggester[]) => {
            const foundWord: WordSuggester | undefined = wordSuggester.find(
              (suggestion: WordSuggester) => {
                const isValidWord: boolean = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/i.test(suggestion.word);
                return isValidWord && suggestion.word !== '[UNK]';
              });
            if (foundWord) {
              this.suggestion = foundWord.word;
              this.appendWord(foundWord.word);
            } else {
              console.log('No se encontró ninguna palabra válida');
            }
          },
          error: (error) => {
            console.error(error);
          }
        });

    }
  }

  appendWord(suggestion: string) {

    if (!this.hasSuggestion) {
      let lastIndex = this.primeEditor!.quill.getLength() - 1;
      this.primeEditor!.quill.insertText(lastIndex, ' ' + suggestion);
      this.primeEditor!.quill.formatText(lastIndex, suggestion.length + 1, 'color', 'gray');
      this.primeEditor!.quill.setSelection(lastIndex, 0);
      this.hasSuggestion = true;
    }

  }

  acceptSuggestion() {
    this.hasSuggestion = false;
    //eliminar el tab dado
    let lastIndex = this.primeEditor!.quill.getLength() - 1;
    this.primeEditor!.quill.deleteText(lastIndex - this.suggestion.length - 2, 2);

    // Replace the suggestion with itself without format
    let newIndex = this.primeEditor!.quill.getLength() - 1;
    this.primeEditor!.quill.formatText(newIndex - this.suggestion.length, this.suggestion.length, 'color', 'var(--text-color)');
    this.primeEditor!.quill.setSelection(newIndex, 0);
  }


  rejectSuggestion(event: KeyboardEvent) {
    if (event.key !== 'Tab' && this.hasSuggestion) {
      this.hasSuggestion = false;
      let allText = this.primeEditor!.quill.getText().split(' ');
      let lastIndex = this.primeEditor!.quill.getLength() - 1;
      let lastWord = allText[allText.length - 1];
      this.primeEditor!.quill.deleteText(lastIndex - lastWord.length, lastWord.length);
      this.primeEditor!.quill.setSelection(lastIndex, 0);
    }
  }

  analyzeText() {
    this.hasSpellCheckerResponse = false;
    this.hasGrammaticalAnalyzerResponse = false;
    this.isAnalyzeButtonClicked = false;
    this.isContentInappropriate = false;

    let text = this.primeEditor!.quill.getText();

    if (text.trim().length === 0) {
      this.notificationService.notifyError(
        this.translateService.instant('ANALYZE_TEXT.TOAST.EMPTY_TEXT_MESSAGE')
      );
    }else {

      this.moderationService.checkModeration(text)
        .subscribe({
          next: (moderationResponse: Moderation) => this.handleModerationResponse(moderationResponse),
          error: (error) => console.error(error)
        });
    }

  }

  private handleModerationResponse(moderationResponse: Moderation) {
    this.isContentInappropriate = moderationResponse.results.some((result) => result.flagged);
    console.log(this.isContentInappropriate)
    if (this.isContentInappropriate) {
      this.handleInappropriateContent();
    } else {
      this.handleAppropriateContent();
    }
  }

  private handleInappropriateContent() {
    this.isAnalyzeButtonClicked = false;
    this.notificationService.notifyError(
      this.translateService.instant('ANALYZE_TEXT.TOAST.INAPPROPRIATE_CONTENT_MESSAGE')
    );
  }

  private handleAppropriateContent() {
    let text:string = this.primeEditor!.quill.getText()
    if (this.containsSensitiveData(text)) {
      this.isAnalyzeButtonClicked = false;
      this.notificationService.notifyError(
        this.translateService.instant('ANALYZE_TEXT.TOAST.SENSITIVE_DATA_MESSAGE')
      );
    } else {
      this.isAnalyzeButtonClicked = true;
      text = text.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s\n.,]/g, '');
      this.checkSpell(text);
      this.checkGrammar();
      this.notificationService.notifySucess(
        this.translateService.instant('ANALYZE_TEXT.TOAST.SUCCESS')
      );
    }
  }

  private containsSensitiveData(text: string): boolean {
    const phoneRegex = /^(\(\+?\d{2,3}\)[*|\s\-.]?((\d[*|\s\-.]?){6})((\d[\s|\-.]?){2})?|(\+?\d[\s|\-.]?){8}((\d[\s|.]?){2}((\d[\s|\-.]?){2})?)?)$/;
    const emailRegex = /[\w.-]+@[\w.-]+\.\w+/;
    const nssRegex = /\b\d{11}\b/;
    const cardNumberRegex = /\b\d{16}\b/;

    return phoneRegex.test(text) || emailRegex.test(text) || nssRegex.test(text) || cardNumberRegex.test(text);
  }

  private checkGrammar() {
    this.grammaticalAnalyzerService.analyzeGrammar(this.primeEditor!.quill.getText())
      .subscribe({
        next: (grammaticalAnalyzerResponse: GrammaticalAnalyzer[]) => {
          this.grammaticalAnalyzer = [];

          if (grammaticalAnalyzerResponse instanceof Array) {
            this.grammaticalAnalyzer = grammaticalAnalyzerResponse;
          } else {
            this.grammaticalAnalyzer.push(grammaticalAnalyzerResponse);
          }
          this.hasGrammaticalAnalyzerResponse = true;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  private checkSpell(text:string) {
    this.spellCheckerService.checkSpelling(text)
      .subscribe({
        next: (spellChecker: SpellChecker[]) => {
          this.spellChecker = spellChecker;
          this.hasSpellCheckerResponse = true;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
}
