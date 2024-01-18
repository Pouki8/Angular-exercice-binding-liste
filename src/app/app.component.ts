import { Component, OnInit, VERSION } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userToDisplay = [];
  showName: any[];
  selectChoice: string = "first";
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.showName = this.dataService.getUsersData();
    this.userToDisplay = [...this.showName];
  }

  showNameInput(content: string) {
    console.log('content received : ', content);
    this.userToDisplay = this.showName.filter((user) =>
      user.name[this.selectChoice].toLowerCase().includes(content.toLowerCase()));
  }

  showSelect(choice: string) {
    this.selectChoice = choice;
  }

}
