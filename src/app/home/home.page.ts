import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonApp, IonButton } from '@ionic/angular/standalone';
import { VocalService } from '../services/vocal.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonApp, IonHeader, IonToolbar, IonTitle, IonContent, AsyncPipe],
})
export class HomePage {
  particleCount: Array<number>;

  constructor(public vocal: VocalService) {
    this.particleCount = new Array(50).fill(1);
  }
}
