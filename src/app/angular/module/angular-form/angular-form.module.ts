/*
 * @Author: cjy
 * @Date: 2022-02-03 18:32:50
 * @LastEditTime: 2022-02-03 18:53:22
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/angular/module/angular-form/angular-form.module.ts
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFormComponent } from './angular-form.component';
import { AngularFormRoutingModule } from './angular-form-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AngularFormComponent],
  imports: [
    CommonModule,
    AngularFormRoutingModule,
    FormsModule,
    IonicModule
  ]
})
export class AngularFormModule { }
