import {Component, OnInit} from '@angular/core';
import {Guitar} from "../guitar.model";

@Component({
  selector: 'app-add-guitar',
  templateUrl: './add-guitar.component.html',
  styleUrls: ['./add-guitar.component.scss']
})
export class AddGuitarComponent implements OnInit {
  guitar!: Guitar;

  constructor() {
  }

  ngOnInit(): void {
  }

  addGuitarHandler() {

  }

  cancelHandler() {

  }
}
