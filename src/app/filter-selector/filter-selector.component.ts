import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css'],
})
export class FilterSelectorComponent implements OnInit {
  @Output() selectRadio = new EventEmitter<string>();
  constructor() { }

  ngOnInit() { }

  showSelectRadio(event: any) {
    console.log(event.target.value);
    const inputContent = event.target.value;
    this.selectRadio.emit(inputContent);
  }
}
