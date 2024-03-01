import { Injectable } from '@angular/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VocalService {

  results = new BehaviorSubject(''); 
  constructor() {

    SpeechRecognition.addListener("partialResults", (data: any) => {
      this.results.next(data.matches);
    });
   }

  async listen(question: string){
    const speechAvailable = await SpeechRecognition.available();
    if(speechAvailable){
      SpeechRecognition.start({
        language: "en-US",
        maxResults: 1,
        prompt: question,
        partialResults: false,
        popup: true,
      });
    }
  }
}
