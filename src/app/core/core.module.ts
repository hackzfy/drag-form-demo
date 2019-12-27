import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [BrowserModule, BrowserAnimationsModule, DragDropModule, HttpClientModule],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class CoreModule {}
