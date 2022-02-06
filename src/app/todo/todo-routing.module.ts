/*
 * @Author: cjy
 * @Date: 2022-02-01 03:15:29
 * @LastEditTime: 2022-02-02 22:03:43
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/todo/todo-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPage } from './todo.page';

const routes: Routes = [
  {
    path: '',
    component: TodoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoPageRoutingModule {}
