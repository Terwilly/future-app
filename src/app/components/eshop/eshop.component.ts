import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.scss'],
})
export class EshopComponent implements OnInit {
  title!: string;
  priceNormal!: number;
  description!: string;
  imageUrl!: string;

  constructor() {}

  ngOnInit(): void {
    this.title = 'Sylvain';
    this.description = 'lorem ipsum de ipsum';
    this.priceNormal = 55;
    this.imageUrl = 'https://postimg.cc/bSyGtVZx';
  }
}
