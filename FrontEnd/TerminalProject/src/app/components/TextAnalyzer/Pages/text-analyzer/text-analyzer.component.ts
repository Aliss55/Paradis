import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-text-analyzer',
  templateUrl: './text-analyzer.component.html',
  styleUrl: './text-analyzer.component.scss'
})
export class TextAnalyzerComponent implements OnInit{
  formGroup: any | undefined;
  fontSize: number = 20; // Inicializa el tamaño de la fuente a 12px
  isBold: boolean = false;
  isItalic: boolean = false;
  isUnderline: boolean = false;
  textAlign: string = 'left';

  constructor() {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      text: new FormControl()
    });
  }
  toggleBold() {
    this.isBold = !this.isBold; // Cambia el valor de isBold
  }

  toggleItalic() {
    this.isItalic = !this.isItalic; // Cambia el valor de isItalic
  }

  toggleUnderline() {
    this.isUnderline = !this.isUnderline; // Cambia el valor de isUnderline
  }
  increaseFontSize() {
    this.fontSize += 1; // Incrementa el tamaño de la fuente en 1px
  }

  decreaseFontSize() {
    this.fontSize -= 1; // Decrementa el tamaño de la fuente en 1px
  }

  alignLeft() {
    this.textAlign = 'left'; // Cambia la alineación del texto a 'left'
  }

  alignCenter() {
    this.textAlign = 'center'; // Cambia la alineación del texto a 'center'
  }

  alignRight() {
    this.textAlign = 'right'; // Cambia la alineación del texto a 'right'
  }
}
