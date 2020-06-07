import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collectionshome',
  templateUrl: './collectionshome.component.html',
  styleUrls: ['./collectionshome.component.css']
})
export class CollectionshomeComponent implements OnInit {
  data = [
    {name: 'Jonh', age: '26', job: 'Doctor'},
    {name: 'Maria', age: '28', job: 'Nurse'},
    {name: 'Ana', age: '29', job: 'Proctologist'}
  ];

  header = [
    {key:'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
