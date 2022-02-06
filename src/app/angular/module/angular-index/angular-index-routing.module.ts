/*
 * @Author: cjy
 * @Date: 2022-02-03 18:58:34
 * @LastEditTime: 2022-02-03 19:07:42
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/angular/module/angular-index/angular-index-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularIndexComponent } from './angular-index.component';

const routes: Routes = [
  {
    path: '',
    component: AngularIndexComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularIndexRoutingModule { }
