import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public lottieConfig;
  public lottieConfig2;
  public lottieConfig3;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() {
    this.lottieConfig = {
      path: 'https://assets4.lottiefiles.com/packages/lf20_hu9cd9.json'
    };
    this.lottieConfig2 = {
      path:
        'https://assets4.lottiefiles.com/datafiles/Hc0DflKIkYg1j3u/data.json'
    };
    this.lottieConfig3 = {
      path: 'https://assets9.lottiefiles.com/packages/lf20_kQqOcL.json'
    };
  }
}
