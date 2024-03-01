import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})



export class AppComponent {
  particleCount: Array<number>;

  constructor() {
    this.particleCount = new Array(50).fill(1);
  }

 
}
