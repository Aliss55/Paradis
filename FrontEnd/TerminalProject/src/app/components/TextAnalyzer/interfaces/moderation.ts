export interface Moderation {
  id:      string;
  model:   string;
  results: Result[];
}

export interface Result {
  flagged:        boolean;
  categories:     { [key: string]: boolean };
  categoryScores: { [key: string]: number };
}
