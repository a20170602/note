/*
 * @Author: cjy
 * @Date: 2022-02-03 23:23:00
 * @LastEditTime: 2022-02-07 00:24:59
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/angular/module/angular-directive/angular-directive.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-angular-directive',
  templateUrl: './angular-directive.component.html',
  styleUrls: ['./angular-directive.component.scss'],
})
export class AngularDirectiveComponent implements OnInit {
  content='';
  show=false;

  userObservable = new Subject<{first: string; last: string}>();
  first = ['John', 'Mike', 'Mary', 'Bob'];
  firstIndex = 0;
  last = ['Smith', 'Novotny', 'Angular'];
  lastIndex = 0;

  forName = ['cjy','lxl','cjy-lxl','--T-T--','5','6'];

  constructor() { }

  ngOnInit() {}

  nextUser() {
    const first = this.first[this.firstIndex++];
    if (this.firstIndex >= this.first.length) {this.firstIndex = 0;}
    const last = this.last[this.lastIndex++];
    if (this.lastIndex >= this.last.length) {this.lastIndex = 0;}
    this.userObservable.next({first, last});
  }

  trackIndex(index,item){
    return index;
  }

}
