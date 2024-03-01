import { Injectable } from '@angular/core';
import { Intervention } from '../models/Intervention';
import { VocalService } from './vocal.service';
import { CommandsFor } from '../models/CommandCategories';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  engaged: boolean = false;
  feeling: string = '';
  history: Array<Intervention> = [];

  answersMap = new Map<string, Array<string>>(
    [
      ['yes', new Array<string>()],
      ['no',  new Array<string>()]
    ]
  );



  constructor(private vocal: VocalService) { 

  }

  async fullCheck(){
    const status = this.boolify(await this.checkFor("Are you working well?"));
    if(status)  return;

    else {
      const feeling = this.boolify( await this.checkFor('Are you feeling fell?'));
    }
  }

  async checkFor(question: string){
    
    await this.vocal.listen(question);
    const answer = this.vocal.results.value;
    
    for(let map of this.answersMap.entries()){
      const [candidateAnswer, tokens] = map;
      if(tokens.includes(answer)) return candidateAnswer;
    }

    return ` '${answer}' not recognized.`;
  }

  boolify(answer: string){
    if(answer == 'yes') return true;
    else return false;
  }
}


