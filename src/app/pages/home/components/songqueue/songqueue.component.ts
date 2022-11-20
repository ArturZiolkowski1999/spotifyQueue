import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-songqueue',
  templateUrl: './songqueue.component.html',
  styleUrls: ['./songqueue.component.css']
})
export class SongqueueComponent implements OnInit {

  @Input() track: any;
  @Output() addToQueue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToQueue(): void {
    this.addToQueue.emit(this.track);
  }

}
