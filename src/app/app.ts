import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponents } from './components/menu-components/menu-components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuComponents],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularcompleto');
}
