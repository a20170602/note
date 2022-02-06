/*
 * @Author: cjy
 * @Date: 2022-02-01 03:15:29
 * @LastEditTime: 2022-02-03 13:29:17
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/tabs/tabs.page.ts
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isModalOpen = false;
  constructor() {}

  openAdd(){
    console.log('打开弹窗');
    this.isModalOpen = true;
  }
}
