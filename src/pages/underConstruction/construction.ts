import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Component({
    selector: 'page-construction',
    templateUrl: 'construction.html'
})

export class ConstructionPage {
    pageTitle: string;

    constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
        this.navCtrl = navCtrl;
        this.pageTitle = navParams.get('linkParam');
    }
    
    ionViewDidEnter(): void {}
}