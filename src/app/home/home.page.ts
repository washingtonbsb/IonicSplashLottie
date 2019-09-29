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
  public lottieConfig4;
  public lottieConfig5;

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
    this.lottieConfig4 = {
      path: 'https://assets4.lottiefiles.com/packages/lf20_dyXaL5.json'
    };

    this.lottieConfig5 = {
      path:
        'https://api.lottiefiles.com/v2/force-download-file?url=https://assets7.lottiefiles.com/temp_editor_files/lf30_editor_dAdWn1.json'
    };
  }
}
