import { TestBed } from '@angular/core/testing';

import { GrammaticalAnalyzerService } from './grammatical-analyzer.service';

describe('GrammaticalAnalyzerService', () => {
  let service: GrammaticalAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrammaticalAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
