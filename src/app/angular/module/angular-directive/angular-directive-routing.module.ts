/*
 * @Author: cjy
 * @Date: 2022-02-03 23:22:43
 * @LastEditTime: 2022-02-03 23:23:33
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/angular/module/angular-directive/angular-directive-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularDirectiveComponent } from './angular-directive.component';

const routes: Routes = [
  {
    path:'',
    component:AngularDirectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularDirectiveRoutingModule { }
