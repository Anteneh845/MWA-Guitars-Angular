import {Component, Input, OnInit} from '@angular/core';
import {Guitar} from "../guitar.model";

@Component({
  selector: 'guitar-card',
  templateUrl: './guitar-card.component.html',
  styleUrls: ['./guitar-card.component.scss']
})
export class GuitarCardComponent implements OnInit {
  @Input()
  guitar!: Guitar;
  acousticImageUrl:string = "https://media.guitarcenter.com/is/image/MMGS7//O120CESB-Auditorium-Acoustic-Electric-Guitar-3-Color-Sunburst/J51473000001000-00-1600x1600.jpg";
  electricImageUrl:string = "https://media.guitarcenter.com/is/image/MMGS7//SG-Standard-Electric-Guitar-Ebony/L54573000002000-00-1600x1600.jpg";
  classicalImageUrl:string = "https://us.123rf.com/450wm/yolya/yolya1802/yolya180200106/96114000-acoustic-classic-guitar-on-blue-background-simple-musical-instrument-with-copy-space.jpg?ver=6";
  constructor() { }

  ngOnInit(): void {
  }

}
