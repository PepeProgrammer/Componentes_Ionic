import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.page.html',
    styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
    titulo: string;
    constructor(private alert: AlertController) {
    }

    ngOnInit() {
    }

    async presentAlert() {
        const alert = await this.alert.create({
            header: 'Alert',
            subHeader: 'Subtitle',
            message: 'This is an alert message.',
            buttons: [{
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {
                    console.log('Confirm Cancel: blah');
                }
            }, {
                text: 'Okay',
                handler: () => {
                    console.log('Confirm Okay');
                }
            }],
        });

        await alert.present();
    }

    async cambiarHeader() {
        const alert = await this.alert.create({
            header: 'Alert',
            subHeader: 'Subtitle',
            message: 'This is an alert message.',
            inputs: [
                {
                    name: 'texto',
                    type: 'text',
                    placeholder: 'Escribe el título'
                }],
            buttons: [{
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                    console.log('Confirm Cancel: blah');
                }
            }, {
                text: 'Okay',
                handler: (datos) => {
                    this.titulo = datos.texto;
                }
            }],
        });

        await alert.present();
    }

}
