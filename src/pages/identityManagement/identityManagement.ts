import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
    selector: 'page-identityManagement',
    templateUrl: 'identityManagement.html'
})
export class IdentityManagementPage {
    constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
        this.navCtrl = navCtrl;
    }

    ionViewDidEnter(): void { }
}
