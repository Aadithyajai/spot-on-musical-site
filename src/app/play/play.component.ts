// Inside play.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  constructor() {
    console.log('PlayComponent instantiated');
  }

  ngOnInit() {
    console.log('PlayComponent ngOnInit');
  }
}
