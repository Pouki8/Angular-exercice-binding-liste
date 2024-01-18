import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() userName = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  showUserInput(event: any) {
    console.log(event.target.value);
    const inputContent = event.target.value;
    this.userName.emit(inputContent);
  }


}
