import {Component, OnInit} from '@angular/core';
import {Guitar} from "../guitar.model";
import {GuitarService} from "../guitar.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-guitar-detail',
  templateUrl: './guitar-detail.component.html',
  styleUrls: ['./guitar-detail.component.scss']
})
export class GuitarDetailComponent implements OnInit {
  guitar!: Guitar;

  constructor(private guitarService: GuitarService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let guitarId = this.route.snapshot.params.guitarId;
    this.getGuitarDetail(guitarId)
  }

  getGuitarDetail(guitarId: string) {
    this.guitarService.getGuitarDetail(guitarId)
      .subscribe(guitar => this.guitar = guitar);
  }
  isLoggedIn(){
    return false;
  }
  deleteGuitar(guitarId:String){
    console.log(guitarId)
  }
}
