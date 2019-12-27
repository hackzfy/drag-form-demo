import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auto-form-item-config',
  templateUrl: './auto-form-item-config.component.html',
  styleUrls: ['./auto-form-item-config.component.less']
})
export class AutoFormItemConfigComponent implements OnInit {
  @Input() config: any;
  @Output() configSubmit = new EventEmitter();
  form = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      label: this.config.label,
      options: this.fb.array(this.genFormArrayFromConfig())
    });
  }

  genFormArrayFromConfig() {
    if (this.config.options == null) {
      return [];
    }
    return this.config.options.map(option =>
      this.fb.group({
        label: option.label,
        value: option.value
      })
    );
  }

  onSubmit() {
    const value = this.form.value;
    value.options = value.options.filter(
      option => option.value && option.label
    );
    this.configSubmit.emit(value);
    this.form.reset({});
  }

  get showOptions() {
    return this.config && this.config.type === 'SELECT';
  }

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const options = this.form.get('options') as FormArray;
    options.push(
      this.fb.group({
        label: '',
        value: ''
      })
    );
  }

  removeField(i: number): void {
    const options = this.form.get('options') as FormArray;
    options.removeAt(i);
  }
}
