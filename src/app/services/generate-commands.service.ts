import { Injectable } from '@angular/core';
import { CommandsFor } from '../models/CommandCategories';import { StorageService } from './storage.service';
}

@Injectable({
  providedIn: 'root'
})
export class GenerateCommandsService {


  
  constructor(private store: StorageService) { }

  async nAryCommands(category: CommandsFor){
    const commandList = await this.store.getCommandResponses(category);
    const commands: [string, string[]][] = commandList.map(key=>  [key, new Array<string>()])


    return new Map<string, Array<string>>(commands);

  }

  BinaryCommands(){
    return new Map<boolean, Array<string>>(    
    [
      [true, []],
      [false, []],
    ])
  }
}
