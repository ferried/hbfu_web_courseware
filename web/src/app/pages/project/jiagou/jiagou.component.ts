import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-jiagou',
  templateUrl: './jiagou.component.html',
  styleUrls: ['./jiagou.component.css']
})
export class JiagouComponent implements OnInit {

  constructor() {
  }

  data = [{name: 'asd', age: 'qwe', address: "zxc"}]

  ngOnInit(): void {
  }

}
