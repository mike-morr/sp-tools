import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-compare',
  templateUrl: './list-compare.component.html',
  styleUrls: ['./list-compare.component.scss']
})
export class ListCompareComponent implements OnInit {
  site1: string = '';
  site2: string = '';

  constructor() { }

  ngOnInit() {
  }

}
