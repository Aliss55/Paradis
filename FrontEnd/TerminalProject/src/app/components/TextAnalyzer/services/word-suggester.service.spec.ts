import { TestBed } from '@angular/core/testing';

import { WordSuggesterService } from './word-suggester.service';

describe('WordSuggesterService', () => {
  let service: WordSuggesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordSuggesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
