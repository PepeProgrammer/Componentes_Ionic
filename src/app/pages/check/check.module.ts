import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckPage } from './check.page';
import {ComponetsModule} from '../../componets/componets.module';

const routes: Routes = [
  {
    path: '',
    component: CheckPage
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
  declarations: [CheckPage]
})
export class CheckPageModule {}
