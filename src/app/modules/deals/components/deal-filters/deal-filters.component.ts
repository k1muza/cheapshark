import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DealFiltersComponent),
  multi: true,
};

@Component({
  selector: 'app-deal-filters',
  templateUrl: './deal-filters.component.html',
  styleUrls: ['./deal-filters.component.scss'],
  providers: [CONTROL_VALUE_ACCESSOR], // <-- provided here
})
export class DealFiltersComponent implements OnInit, ControlValueAccessor {

  checked!: boolean;
  touched!: boolean;
  disabled = false;
  private onTouched!: Function;
  private onChanged!: Function;

  collapse = true;

  constructor() { }

  toggleCollapse() {
    this.collapse = !this.collapse;
  }

  onCheck() {
    this.onTouched(); // <-- mark as touched
    this.checked = !this.checked;
    this.onChanged(this.checked); // <-- call function to let know of a change
  }

  writeValue(obj: any): void {
    this.checked = obj
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn; // <-- save the function
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn; // <-- save the function
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  }

}
