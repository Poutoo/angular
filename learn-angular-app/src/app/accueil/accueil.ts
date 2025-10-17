import { Component } from '@angular/core';
import { NgForOf } from "../../../node_modules/@angular/common/common_module.d";

@Component({
  selector: 'app-accueil',
  imports: [NgForOf],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css'
})
export class AccueilComponent {
    message = 'Bienvenu sur la page d\'accueil !';
    compteur = 0;
    nom ="User";
    isVisible = true;
    items = ['Pomme', 'Banane', 'Orange'];

    incrementer() {
        this.compteur++;
    }

    toggleVisibility() {
        this.isVisible = !this.isVisible;
    }

}
