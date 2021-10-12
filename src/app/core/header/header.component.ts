import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'CheapShark'
  routeNames = ['deals', 'games', 'stores']

  constructor() { }

  ngOnInit(): void {
  }

}
