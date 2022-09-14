import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onChangeValue(event: any) {
    if (event.target.checked == true) {
      console.log(event.target.value);
    }
  }
}
