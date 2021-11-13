import { TestBed } from '@angular/core/testing';

import { PlayerInfoScoreService } from './player-info-score.service';

describe('PlayerInfoScoreService', () => {
  let service: PlayerInfoScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerInfoScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
