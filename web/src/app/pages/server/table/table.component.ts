import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Person {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  persons: Array<Person> = [];
  addWindowVis = false;

  addPerson: Person = {
    id: null,
    name: null,
    age: null
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getAllPersons();
  }

  showAdd(): void {
    this.addWindowVis = true;
  }

  getAllPersons(): void {
    this.http.get('http://localhost:8888/server/table/findall').subscribe((response: any) => {
      this.persons = response.msg;
    });
  }

  delete(id: number): void {
    this.http.delete('http://localhost:8888/server/table/delete/' + id).subscribe((response) => {
      this.getAllPersons();
    });
  }

  cancelAdd(): void {
    this.addWindowVis = false;
  }

  handleAdd(): void {
    this.http.post('http://localhost:8888/server/table/addperson', this.addPerson).subscribe(((response) => {
      this.getAllPersons();
      this.addWindowVis = false;
    }));
  }

}
