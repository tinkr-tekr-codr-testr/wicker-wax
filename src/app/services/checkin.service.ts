import { Injectable } from '@angular/core';
import { Intervention } from '../models/Intervention';
import { VocalService } from './vocal.service';
import { nAryCommands, BinaryCommands } from '../models/Commands';}
import { CommandsFor } from '../models/CommandCategories';}

@Injectable({
  providedIn: 'root'
})
export class CheckinService {
  engaged: boolean = false;
  feeling: string = '';
  history: Array<Intervention> = [];

  presenceCommands = BinaryCommands();
  feelingCommands = nAryCommands(CommandsFor.FEELING);



  constructor(private vocal: VocalService) { 

  }

  async fullCheck(){
    const status = await this.checkFor("Are you working well?");
    if(status)  return;

    else {
      const feeling = await this.checkFor('How are you feeling?')
    }
  }

  async checkFor(question: string, commands){
    let actualStatus;
    
    await this.vocal.listen(question);
    const presence = this.vocal.results.value;
    

    for(let statusCommands of this.presenceCommands.entries()){
      const [candidateStatus, commands] = statusCommands;
      if(commands.includes(presence)) return candidateStatus;
    }

    return '';

  }
}
