/*
 * @Author: cjy
 * @Date: 2022-02-03 13:16:19
 * @LastEditTime: 2022-02-03 13:29:56
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/todo/components/todo-add/todo-add.module.ts
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TodoAddComponent } from './todo-add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TodoAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports:[
    TodoAddComponent
  ]
})
export class TodoAddModule { }
