import {Component, OnInit} from '@angular/core';
import {Guitar} from "../guitar.model";
import {GuitarService} from "../guitar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-guitar',
  templateUrl: './add-guitar.component.html',
  styleUrls: ['./add-guitar.component.scss']
})
export class AddGuitarComponent implements OnInit {
  guitar!: Guitar;

  constructor(private guitarService: GuitarService, private route: Router) {
  }

  ngOnInit(): void {
  }

  addGuitarHandler(guitar: Guitar) {
    this.guitarService
      .addGuitar(guitar)
      .subscribe(() => this.route.navigate(["guitars"]))
    console.log(guitar)
  }

  cancelHandler() {
    this.route.navigate([""])
  }
}
