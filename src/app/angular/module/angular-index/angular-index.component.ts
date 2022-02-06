/*
 * @Author: cjy
 * @Date: 2022-02-03 18:59:00
 * @LastEditTime: 2022-02-03 20:10:51
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/angular/module/angular-index/angular-index.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-angular-index',
  templateUrl: './angular-index.component.html',
  styleUrls: ['./angular-index.component.scss'],
})
export class AngularIndexComponent implements OnInit {

  constructor(
    // private navCtrl: NavController,
  ) { }

  ngOnInit() {}

  // openItem(url: string){
    // this.navCtrl.navigateForward([url]);
  // }

}
