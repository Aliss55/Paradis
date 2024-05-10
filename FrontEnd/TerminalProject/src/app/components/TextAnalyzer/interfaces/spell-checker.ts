export interface SpellChecker {
  original_sentence:    string;
  possible_corrections: PossibleCorrection[];
}

export interface PossibleCorrection {
  corrections: Correction[];
  token:       string;
}

export interface Correction {
  distance: number;
  word:     string;
}

