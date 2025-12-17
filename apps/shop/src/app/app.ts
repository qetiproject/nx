import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { range } from '@foocaompany/utils';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [NxWelcome, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit{

  protected title = 'shop';

  ngOnInit(): void {
    console.log(range(40, 45))
  }
}
