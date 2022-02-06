/*
 * @Author: cjy
 * @Date: 2022-02-01 03:15:29
 * @LastEditTime: 2022-02-03 13:04:52
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/todo/todo.module.ts
 */
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoPage } from './todo.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TodoPageRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TodoPageRoutingModule,
  ],
  declarations: [TodoPage, TodoListComponent],
})
export class TodoPageModule {}
