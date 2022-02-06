/*
 * @Author: cjy
 * @Date: 2022-02-03 18:58:34
 * @LastEditTime: 2022-02-03 20:01:15
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/angular/module/angular-index/angular-index.module.ts
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularIndexRoutingModule } from './angular-index-routing.module';
import { AngularIndexComponent } from './angular-index.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [AngularIndexComponent],
  imports: [
    CommonModule,
    AngularIndexRoutingModule,
    FormsModule,
    IonicModule
  ]
})
export class AngularIndexModule { }
