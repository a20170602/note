/*
 * @Author: cjy
 * @Date: 2022-02-03 18:48:01
 * @LastEditTime: 2022-02-03 18:49:52
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/angular/module/angular-form/angular-form-routing.module.ts
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormComponent } from './angular-form.component';

const routes: Routes = [
  {
    path: '',
    component: AngularFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularFormRoutingModule {}
