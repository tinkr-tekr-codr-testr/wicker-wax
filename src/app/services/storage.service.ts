import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CommandsFor } from '../models/CommandCategories';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;


  constructor(private store: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.store.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public async getCommandResponses(key:CommandsFor) {
    const res = await this._storage?.get(key);
    return (res as Array<string>) || ['none'];
  }

  public async setCommandResponses(key:CommandsFor, commands: Array<string>) {
    this._storage?.set(key, commands);
  }

  

}
