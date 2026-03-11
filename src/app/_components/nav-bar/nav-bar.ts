import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar implements OnInit {
  ngOnInit(): void {
    console.log("me component nav Bar iniciou")
  }

}
