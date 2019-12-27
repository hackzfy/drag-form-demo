import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-auto-form-item',
  templateUrl: './auto-form-item.component.html',
  styleUrls: ['./auto-form-item.component.scss'],
})
export class AutoFormItemComponent implements OnInit {
  @Input() config = {} as any;

  constructor() {}

  ngOnInit() {
    console.log(this.config);
  }
}
