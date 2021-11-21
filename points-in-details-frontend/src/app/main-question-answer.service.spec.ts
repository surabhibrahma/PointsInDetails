import { TestBed } from '@angular/core/testing';

import { MainQuestionAnswerService } from './main-question-answer.service';

describe('MainQuestionAnswerService', () => {
  let service: MainQuestionAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainQuestionAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
