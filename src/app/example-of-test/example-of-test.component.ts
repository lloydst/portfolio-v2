import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-of-test',
  templateUrl: './example-of-test.component.html',
  styleUrls: ['./example-of-test.component.scss']
})
export class ExampleOfTestComponent implements OnInit {
  title = 'Test Tour of Heroes';
  constructor() { }

  ngOnInit() {
  }

}

