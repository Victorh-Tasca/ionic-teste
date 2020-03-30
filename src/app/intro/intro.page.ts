import { Component, OnInit } from '@angular/core';

import { TabsPage } from '../tabs/tabs.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})

export class IntroPage implements OnInit {

  constructor
  (public NavCtrl: NavController) {
  }

  ngOnInit() {
  }
  goToTabsPage() {
    this.NavCtrl.navigateRoot('tabs')
  }
}
