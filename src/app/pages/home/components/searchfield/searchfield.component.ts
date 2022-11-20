import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.css']
})
export class SearchfieldComponent implements OnInit {
  trackName: string | undefined;

  @Output() changeInput = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeInput():void {
    this.changeInput.emit(this.trackName);
    console.log("change");
  }


}
