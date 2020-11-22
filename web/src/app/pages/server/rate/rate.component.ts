import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  rateNum: any = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8888/server/rate/queryRateNum').subscribe((response: any) => {
      console.log(response);
      this.rateNum = response.msg;
    });
  }

  click(asd): void {
    this.http.post('http://localhost:8888/server/rate/setRateNum', {num: asd}).subscribe((response: any) => {
      alert('设置成功!');
    });
  }

}
