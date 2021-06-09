import {Component, OnInit} from '@angular/core';
import {GuitarService} from "../guitar.service";
import {Guitar} from "../guitar.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.scss']
})
export class GuitarListComponent implements OnInit {
  guitars: Guitar[] = [];
  query: any;
  brand!: string;
  offset!: number;
  count!: number;
  searchQuery!: string;

  constructor(private guitarService: GuitarService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.initializeQueryValues()
    this.getGuitarList();
  }

  initializeQueryValues() {
    this.query = {};
    let brand = this.route.snapshot.queryParams.brand;
    this.count = this.route.snapshot.queryParams.count ? this.route.snapshot.queryParams.count : 12;
    this.offset = this.route.snapshot.queryParams.offset ? this.route.snapshot.queryParams.offset : 0;
    this.searchQuery = "";
    if (this.brand)
      this.searchQuery += this.searchQuery === "" ? "?brand=" + this.brand : "&brand=" + this.brand;
    this.searchQuery += this.searchQuery === "" ? "?offset=" + this.offset : "&offset=" + this.offset;
    this.searchQuery += "&count=" + this.count;
  }

  getGuitarList() {
    this.guitarService.getGuitarList(this.searchQuery)
      .subscribe(guitars => this.guitars = guitars);
  }

  previousPage() {
    this.initializeQueryValues();
    this.query = {};
    if (this.brand)
      this.query.brand = this.brand;
    this.query.offset = parseInt(String(this.offset)) - 12;
    this.query.count = parseInt(String(this.count));
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.query,
      queryParamsHandling: 'merge'
    })
      .then(() =>
        this.guitarService
          .getGuitarList(this.searchQuery)
          .subscribe(guitars => this.guitars = guitars)
      );
  }

  nextPage() {
    this.initializeQueryValues();
    this.query = {};
    if (this.brand)
      this.query.brand = this.brand;
    this.query.offset = parseInt(String(this.offset)) + 12;
    this.query.count = parseInt(String(this.count));
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.query,
      queryParamsHandling: 'merge'
    })
      .then(() =>
        this.guitarService
          .getGuitarList(this.searchQuery)
          .subscribe(guitars => this.guitars = guitars)
      );
  }
}
