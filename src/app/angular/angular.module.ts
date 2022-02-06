/*
 * @Author: cjy
 * @Date: 2022-02-01 03:15:29
 * @LastEditTime: 2022-02-03 18:11:53
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/angular/angular.module.ts
 */
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularPage } from './angular.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AngularPageRoutingModule } from './angular-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AngularPageRoutingModule
  ],
  declarations: [AngularPage]
})
export class AngularPageModule {}
