import {Component, OnInit} from '@angular/core';
import {Guitar} from "../guitar.model";
import {GuitarService} from "../guitar.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-guitar-detail',
  templateUrl: './guitar-detail.component.html',
  styleUrls: ['./guitar-detail.component.scss']
})
export class GuitarDetailComponent implements OnInit {
  guitar!: Guitar;

  constructor(private guitarService: GuitarService, private authenticationService:AuthenticationService,private route: ActivatedRoute,private  router:Router) {
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
    return this.authenticationService.isLoggedIn();
  }

  deleteGuitar(guitarId:String){
    this.guitarService.deleteGuitarDetail(guitarId as string)
      .subscribe(()=>this.router.navigate(['']))
  }

  editGuitar(guitarId:String){
    console.log(guitarId)
    this.router.navigate(['guitars',guitarId,'edit'])
  }

}
