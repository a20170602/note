/*
 * @Author: cjy
 * @Date: 2022-02-01 03:15:29
 * @LastEditTime: 2022-02-04 00:32:11
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/main.ts
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// codemirror 使用
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
