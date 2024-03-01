import { TestBed } from '@angular/core/testing';

import { GenerateCommandsService } from './generate-commands.service';

describe('GenerateCommandsService', () => {
  let service: GenerateCommandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateCommandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
