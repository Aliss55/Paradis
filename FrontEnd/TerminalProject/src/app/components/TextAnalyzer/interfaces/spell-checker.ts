export interface SpellChecker {
  originalSentence:    string;
  possibleCorrections: PossibleCorrection[];
}

export interface PossibleCorrection {
  corrections: Correction[];
  token:       string;
}

export interface Correction {
  distance: number;
  word:     string;
}

