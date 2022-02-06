/*
 * @Author: cjy
 * @Date: 2022-02-01 03:15:29
 * @LastEditTime: 2022-02-03 23:24:04
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/angular/angular-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularPage } from './angular.page';

const routes: Routes = [
  {
    path: '',
    component: AngularPage,
    children:[
      {
        /** 表单 */
        path: 'form',
        loadChildren: () => import('../angular/module/angular-form/angular-form.module').then(m => m.AngularFormModule)
      },
      {
        /** 表单 */
        path: 'directive',
        loadChildren: () => import('../angular/module/angular-directive/angular-directive.module').then(m => m.AngularDirectiveModule)
      },
      {
        path: '',
        loadChildren: () => import('../angular/module/angular-index/angular-index.module').then(m => m.AngularIndexModule)
      },
      {
        path: '',
        redirectTo: '/tabs/angular',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularPageRoutingModule {}
