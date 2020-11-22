import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  constructor(private  router: Router) {

  }
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.router.navigate(['/project/sxbd']);
    // }, 5000);
  }


}
