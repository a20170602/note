/*
 * @Author: cjy
 * @Date: 2022-02-03 00:28:19
 * @LastEditTime: 2022-02-03 14:11:32
 * @LastEditors: cjy
 * @Description:
 * @FilePath: /note/src/app/todo/components/todo-add/todo-add.component.ts
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  // 内容和标题
  title = '';

  content = '';

  constructor() {}

  ngOnInit() {}

  add(event){
    console.log('$event==>',event);
  }
}
