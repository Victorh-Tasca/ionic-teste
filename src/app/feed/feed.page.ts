import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nome_usuario: string = "Victor Hugo do Código";

  constructor() { }

  soma(num1: number, num2:number): number {
    return(num1 + num2);
  }
  ngOnInit() {
  //  this.soma(10, 99);
  }

}
