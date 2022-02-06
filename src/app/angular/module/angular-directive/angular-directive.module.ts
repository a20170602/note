/*
 * @Author: cjy
 * @Date: 2022-02-03 23:22:43
 * @LastEditTime: 2022-02-04 00:35:11
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/angular/module/angular-directive/angular-directive.module.ts
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularDirectiveRoutingModule } from './angular-directive-routing.module';
import { IonicModule } from '@ionic/angular';
import { AngularDirectiveComponent } from './angular-directive.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';


@NgModule({
  declarations: [AngularDirectiveComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    CodemirrorModule,
    AngularDirectiveRoutingModule
  ]
})
export class AngularDirectiveModule { }
