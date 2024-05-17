import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShufflerService {
  constructor() {}

  public convertToArrayOfArrays(questions: Object[]): string[][] {
    return questions.map(question  => Object.values(question));
  }

  public getShuffledPropertyLabels(
    label: string,
    properties: string[],
    iterations: number,
  ): string[][] {
    let shuffledLabels: string[][] = [];
    for (let i = 0; i < iterations; i++) {
      const shuffledProperties = this.shufflePropertiesOfObjects(properties);
      let properties_labeled = shuffledProperties.map(
        (property) => `${label}.${property}`,
      );
      shuffledLabels.push(properties_labeled);
    }
    return shuffledLabels;
  }

  public shufflePropertiesOfObjects(properties: string[]): string[] {
    const copy = properties.slice();
    return copy.sort(() => Math.random() - 0.5);
  }
}
