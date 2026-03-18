import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./_components/nav-bar/nav-bar";



import { BaseUi } from "./_components/base-ui/base-ui";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('geradorCertificado');
  exibeNavbar: boolean = false
}
