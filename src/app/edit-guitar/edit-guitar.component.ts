import {Component, OnInit} from '@angular/core';
import {Guitar} from "../guitar.model";
import {GuitarService} from "../guitar.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-guitar',
  templateUrl: './edit-guitar.component.html',
  styleUrls: ['./edit-guitar.component.scss']
})
export class EditGuitarComponent implements OnInit {
  guitar!: Guitar;

  constructor(private guitarService: GuitarService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let guitarId = this.activatedRoute.snapshot.params.guitarId;
    this.getGuitarById(guitarId)
  }

  getGuitarById(guitarId: string) {
    this.guitarService
      .getGuitarDetail(guitarId)
      .subscribe(guitar => this.guitar = guitar)
  }

  editGuitarHandler() {
    this.guitarService
      .updateGuitar(this.guitar)
      .subscribe(() => this.router.navigate(['']))
  }
}
