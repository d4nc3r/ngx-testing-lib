import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-auth-lib',
  template: `
    <h1>{{ msg }}</h1>
    <button (click)="party()">Click me for a good time</button>
  `,
  styles: [],
})
export class AuthLibComponent implements OnInit {
  @Input() msg = 'auth-lib works!';

  constructor() {}

  ngOnInit(): void {}

  party() {
    this.msg = 'Party time!';
  }
}
