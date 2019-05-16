import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {AlertPage} from './alert.page';
import {ComponetsModule} from '../../componets/componets.module';

const routes: Routes = [
    {
        path: '',
        component: AlertPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ComponetsModule
    ],
    declarations: [AlertPage]
})
export class AlertPageModule {
}
