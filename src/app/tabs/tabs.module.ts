/*
 * @Author: cjy
 * @Date: 2022-02-01 03:15:29
 * @LastEditTime: 2022-02-03 13:29:37
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/tabs/tabs.module.ts
 */
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { TodoAddModule } from '../todo/components/todo-add/todo-add.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    TodoAddModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
