import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {value:22, label:'# of Users'},
    {value:900, label: 'Revenue'},
    {value:50, label:'Reviews'}
  ];

  items = [
    {image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' , 
      title: 'couch',
      description: 'this is a fantastic couch to sit on'
    },
    {image: 'https://images.unsplash.com/photo-1570526090750-35c73b2b5908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
     title:'refrigerator',
     description:'take the most cool drink here'
    }
  ];

  constructor() { }

  ngOnInit(): void {}
}
