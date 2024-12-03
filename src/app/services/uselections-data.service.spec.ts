import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { USElectionsDataService } from './uselections-data.service';

describe('USElectionsDataService', () => {
  let service: USElectionsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(USElectionsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
