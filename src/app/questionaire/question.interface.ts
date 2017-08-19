import {Answer} from './answer.interface';

export interface Question {
  description: string;
  answers: Array<Answer>
  answerType?: number;
}
