import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-home',
  templateUrl: './modules-home.component.html',
  styleUrls: ['./modules-home.component.css']
})
export class ModulesHomeComponent implements OnInit {
  modalOpen= false;
  items = [
    {title: "why the sky is blue?", content:"Because of the interection between light and water particles"},
    {title: "why a orange is orange?", content:"Cause someone without criativity say so"},
    {title: "Why love hurts?", content:"cause people take it for granted"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
