import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Ajoute cette ligne
import { DataSercice } from '../data'; // Corrige le chemin et le nom de la classe

@Component({
  selector: 'app-accueil',
  imports: [CommonModule],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css'
})
export class AccueilComponent {
    message = 'Bienvenu sur la page d\'accueil !';
    compteur = 0;
    nom ="User";
    isVisible = true;
    items = ['Pomme', 'Banane', 'Orange'];

  constructor(public dataService: DataSercice) {}

    incrementer() {
        this.compteur++;
    }

    toggleVisibility() {
        this.isVisible = !this.isVisible;
    }

}
