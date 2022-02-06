/*
 * @Author: cjy
 * @Date: 2022-02-01 03:15:29
 * @LastEditTime: 2022-02-02 19:40:48
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/app.module.ts
 */
// 文件:根模块 告诉ionic如何组装应用

// iconic angular的核心文件
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// 引入路由配置文件
import { AppRoutingModule } from './app-routing.module';

// 引入根组件
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], //申明组件
  entryComponents: [],//配置不会做模板中使用的组件
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule], //引入的模块 依赖的模块
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], //配置服务
  bootstrap: [AppComponent],
})
export class AppModule {}
