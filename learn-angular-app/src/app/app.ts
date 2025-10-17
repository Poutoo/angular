import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccueilComponent } from "./accueil/accueil";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccueilComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Mon Application Angular';
  today = new Date();
}
