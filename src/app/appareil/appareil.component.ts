import { Component, OnInit, Input } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName = 'Machine à laver';
  @Input() appareilStatus = 'éteint';

  constructor() { }

  ngOnInit() {
  }
  getStatus() {
    // AppComponent.toutAllume
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitch() {
    if (this.appareilStatus === 'éteint') {
      this.appareilStatus = 'allumé';
    } else {
      this.appareilStatus = 'éteint';
    }
  }

}
