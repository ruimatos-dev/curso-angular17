import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements DoCheck{

  num: number = 0;

  ngDoCheck(): void {
      console.log('Mudança no home');
  }

  adiciona1() {
    this.num++;
  }
}
