import { TestBed } from '@angular/core/testing';

import { SaveRDVService } from './save-rdv.service';

describe('SaveRDVService', () => {
  let service: SaveRDVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveRDVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
