import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();
  title = 'Hello World';
  constructor() {
    console.log('in contructor');
   }

  ngOnInit() {
    console.log('in ngOninit');
  }

  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
  }
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
