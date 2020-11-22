import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  @Input() data: Array<any> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
