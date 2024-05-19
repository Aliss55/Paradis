import { TestBed } from '@angular/core/testing';

import { ShufflerService } from './shuffler.service';

describe('ShufflerService', () => {
  let service: ShufflerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShufflerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get shuffled property labels', () => {
    const label = 'test';
    const properties = ['a', 'b', 'c'];
    const iterations = 5;
    const result = service.getShuffledPropertyLabels(label, properties, iterations);

    // Check that the result is an array with the correct number of elements
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toEqual(iterations);

    let differentArrayFound = false;

    // Check that each element of the result is an array with the correct number of elements
    result.forEach(shuffledProperties => {
      expect(Array.isArray(shuffledProperties)).toBeTruthy();
      expect(shuffledProperties.length).toEqual(properties.length);

      // Check that each element of the shuffledProperties array is a string that starts with the label and a dot
      shuffledProperties.forEach(property => {
        expect(typeof property).toEqual('string');
        expect(property.startsWith(`${label}.`)).toBeTruthy();
      });

      // Check if the shuffledProperties array is different from the original properties array
      if (!differentArrayFound) {
        const originalPropertiesLabeled = properties.map(property => `${label}.${property}`);
        if (shuffledProperties.join('') !== originalPropertiesLabeled.join('')) {
          differentArrayFound = true;
        }
      }
    });

    // Check that there is at least one array in the result that is different from the original properties array
    expect(differentArrayFound).toBeTruthy();
  });

  it('should shuffle properties of objects.', () => {
    const properties = ['a', 'b', 'c'];
    let differentResultFound = false;
    for (let i = 0; i < 10; i++) {
      const shuffledProperties = service.shufflePropertiesOfObjects(properties);
      if (shuffledProperties.join('') !== properties.join('')) {
        differentResultFound = true;
        break;
      }
    }
    expect(differentResultFound).toBeTruthy();
  });

});
